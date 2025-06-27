import Container from '@/Container';
import Header from '@/Header/Header';
import { CHARACTERS, shuffle, Character as CharType } from '@/utils/characters';
import { useRestart } from '@/utils/restart';
import README from './README.md';
import { useState, useMemo, useEffect } from 'react';
import Card from './Card';
import { ObjectivesBar } from './ObjectivesBar';
import Next from '@/Next';
import { useLevel } from '@/Header/Levels';
import { vibrate } from '@/utils/vibrate';
import { fx } from '@/utils/sound';

export type MemoryCardsProps = {
  level?: number;
  onNext?: () => void;
};

export const MemoryCards = ({ level, onNext }: MemoryCardsProps) => {
  const _level = useLevel();
  const gameLevel = level ?? _level;
  // Only allow 4x4 or 6x6 grid
  const levelToGrid = (lvl?: number) => {
    if (lvl === 1) return 2;
    if (lvl === 2) return 4;
    return 6;
  };
  const gridSide = levelToGrid(gameLevel);
  const gridSize = gridSide * gridSide;
  const { life, restart } = useRestart();

  // Character sets in order of complexity
  const CHARACTER_SET_KEYS = ['fruits', 'animals', 'uppercaseLetters', 'lowercaseLetters', 'digits', 'numbersTens'];

  // Compose character set for the level
  const characters = useMemo(() => {
    let setsToUse: string[] = [];
    if (gameLevel === 1) {
      // Pick one random set for level 1
      const key = CHARACTER_SET_KEYS[Math.floor(Math.random() * CHARACTER_SET_KEYS.length)];
      setsToUse = [key];
    } else {
      setsToUse = CHARACTER_SET_KEYS.slice(0, Math.min(gameLevel, 5));
    }
    // Flatten and shuffle
    let chars = setsToUse.flatMap((key) => CHARACTERS[key as keyof typeof CHARACTERS]);
    chars = shuffle(chars);
    // Limit to 6 unique characters
    const uniqueChars = Array.from(new Set(chars.map((c) => c.value)))
      .slice(0, 6)
      .map((val) => chars.find((c) => c.value === val)!);
    // Repeat as needed to fill half the grid size
    const needed = Math.floor(gridSize / 2);
    let result: typeof uniqueChars = [];
    while (result.length < needed) {
      result = result.concat(uniqueChars.slice(0, Math.min(needed - result.length, uniqueChars.length)));
    }
    return result;
  }, [gameLevel, gridSize]);

  // Duplicate and shuffle for pairs
  const [shuffled, setShuffled] = useState(() => {
    const pairs = [...characters, ...characters].map((c: CharType, i: number) => ({ ...c, _id: i + '-' + c.value }));
    return shuffle(pairs);
  });
  const [flipped, setFlipped] = useState<string[]>([]); // _id's of currently flipped
  const [matched, setMatched] = useState<string[]>([]); // _id's of matched cards
  const [won, setWon] = useState(false);

  // Handle flipping a card
  const onCardClick = (card: { value: string; _id: string }) => {
    vibrate();
    if (flipped.length === 2 || flipped.includes(card._id) || matched.includes(card._id)) return;
    const newFlipped = [...flipped, card._id];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map((id) => shuffled.find((c) => c._id === id));
      if (first && second && first.value === second.value) {
        fx.correct.play();
        setTimeout(() => {
          setMatched((m) => [...m, first._id, second._id]);
          setFlipped([]);
        }, 700);
      } else {
        fx.incorrect.play();
        setTimeout(() => setFlipped([]), 900);
      }
    } else {
      fx.flip.play();
    }
  };

  // Win detection
  if (!won && matched.length === shuffled.length) {
    setTimeout(() => setWon(true), 500);
  }

  // Restart game
  const restartGame = () => {
    const pairs = [...characters, ...characters].map((c: CharType, i: number) => ({ ...c, _id: i + '-' + c.value }));
    setShuffled(shuffle(pairs));
    setFlipped([]);
    setMatched([]);
    setWon(false);
    restart();
  };

  const objectives = useMemo(() => {
    const uniqueCharacters = [...new Set(shuffled.map((c) => c.value))];
    return [
      ...uniqueCharacters.map((c) => ({
        character: {
          value: c,
        },
        total: shuffled.filter((c2) => c2.value === c).length,
        flipped: matched.filter((m) => m.split('-')[1] === c).length,
      })),
    ];
  }, [shuffled, matched]);

  useEffect(() => {
    restartGame();
  }, [gameLevel]);

  return (
    <Container key={`game:${life}-options:${gridSize}`}>
      <Header title="Memory Cards" onRestart={restartGame} Right={<Header.Info description={README} />}>
        Memory Cards
      </Header>
      <div className="flex flex-col items-center justify-start h-[90%] gap-4 pt-4">
        <ObjectivesBar objectives={objectives} />
        {won ? (
          <div className="flex flex-col items-center gap-8 pt-8">
            <div className="text-2xl font-bold">You win! 🎉</div>
            <Next onNext={onNext || restartGame} />
          </div>
        ) : (
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${gridSide}, minmax(0, 1fr))`,
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            {shuffled.map((card) => {
              const isFlipped = flipped.includes(card._id);
              const isMatched = matched.includes(card._id);
              return (
                <div key={card._id} className="aspect-square">
                  <Card
                    name="memory"
                    value={card._id}
                    onClick={() => onCardClick(card)}
                    isFlipped={isFlipped}
                    isMatched={isMatched}
                  >
                    {isFlipped || isMatched ? card.value : '?'}
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};
