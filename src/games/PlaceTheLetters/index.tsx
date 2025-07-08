import Container from '@/Container';
import Header from '@/Header/Header';
import { useLevel } from '@/Header/Levels';
import Next from '@/Next';
import { useRestart } from '@/utils/restart';
import { Levels, WORDS } from '@/utils/words';
import { useConfetti } from '@/Confetti';
import { useEffect, useMemo, useRef, useState } from 'react';
import LetterSlot from './LetterSlot/LetterSlot';
import Letter from './Letter/Letter';
import { useSpeak } from '@/utils/speak';
import { getRainbowColor } from '@/utils/colors';
import README from './README.md';
import clsx from 'clsx';
import { sleep } from '@/utils/sleep';
import { GameImage } from '@/GameImage';

export const PlaceTheLetters = ({ onNext, standalone }: { onNext?: () => void; standalone?: boolean }) => {
  const { life, restart } = useRestart();
  const level = useLevel();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = containerRef.current?.clientWidth || 500;
  const containerHeight = containerRef.current?.clientHeight || 500;
  const wordData = useMemo(() => {
    const words = WORDS[(level + 1) as Levels] || [
      {
        value: 'NONE',
      },
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, life]);
  const word = wordData.value;
  const { characters, placeCharacter } = useWord(word, {
    width: containerWidth,
    height: containerHeight,
  });
  const [spokenCharacter, setSpokenCharacter] = useState<Character | null>(null);
  const [showConfetti, Confetti] = useConfetti();
  const { speak } = useSpeak();
  const isCompleted = characters.every((character) => character.placed);
  const [isSpellingCompleted, setIsSpellingCompleted] = useState(false);
  async function saySpelling() {
    await sleep(400);
    for (const character of characters) {
      setSpokenCharacter(character);
      await Promise.all([
        (async () => {
          await speak(character.character.toUpperCase(), { rate: 1.2 });
          await sleep(50);
        })(),
        sleep(500),
      ]);
    }
    setSpokenCharacter(null);
    showConfetti();
    setIsSpellingCompleted(true);
    await speak(word, { rate: 1.2 });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const speakGoal = () => {
    speak(`Let's spell, ${word}`);
  };
  useEffect(() => {
    speakGoal();
  }, [word, onNext]);
  const fontSizeValue = containerWidth / (characters.length + Math.ceil(characters.length / 4));
  const fontSize = `min(${fontSizeValue}px, 30dvh)`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNextClick = () => {
    setIsSpellingCompleted(false);
    setSpokenCharacter(null);
    restart();
    onNext?.();
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        if (!isCompleted) {
          speakGoal();
        } else {
          onNextClick();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, isCompleted, speakGoal]);

  const nextCharacterForPlacement = characters.find((character) => !character.placed);

  return (
    <Container key={life}>
      <Header onRestart={onNextClick} Right={standalone ? null : <Header.Info description={README} />}>
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          {standalone ? 'Place Letters' : 'Place the letters in the word'}
        </button>
      </Header>
      <div
        className="flex flex-col items-center justify-center h-[90%] gap-y-4 hsx:space-y-2 relative"
        ref={containerRef}
      >
        <div className="flex flex-wrap justify-center content-center items-center gap-1 landscape:px-[1%]">
          {characters.map((character) =>
            character.placed ? (
              <Letter
                key={character.id}
                value={character.character}
                color={getRainbowColor(character.id)}
                fontSize={fontSize}
                spoken={spokenCharacter?.id === character.id}
              />
            ) : (
              <LetterSlot
                key={character.id}
                value={character.character}
                onDrop={() => {
                  const newCharacters = placeCharacter(character.id);
                  if (newCharacters.every((character) => character.placed)) {
                    saySpelling();
                  }
                }}
                fontSize={fontSize}
                canReceive={nextCharacterForPlacement?.character === character.character}
              />
            )
          )}
          {characters.map((character) =>
            character.placed ? null : (
              <Letter
                key={character.id}
                value={character.character}
                draggable={{ position: character.position }}
                color={getRainbowColor(character.id)}
                fontSize={fontSize}
                canBeDropped={nextCharacterForPlacement?.character === character.character}
              />
            )
          )}
        </div>
        <>
          <button
            className={clsx('flex flex-col items-center justify-center', {
              invisible: !isCompleted || !isSpellingCompleted,
            })}
            onClick={() => {
              speakGoal();
            }}
          >
            {Confetti}
            {!!wordData.image && (
              <GameImage
                src={wordData.image}
                alt={word}
                className={{ size: 'w-48 h-48 hsx:w-24 hsx:h-24 hsm:w-24 hsm:h-24' }}
              />
            )}
          </button>
          <Next
            onNext={onNextClick}
            className={{
              invisible: !isCompleted || !isSpellingCompleted,
            }}
          />
        </>
      </div>
    </Container>
  );
};

type Character = {
  character: string;
  id: string;
  placed: boolean;
  position: {
    x: number;
    y: number;
  };
};

const useWord = (word: string, containerSize: { width: number; height: number }) => {
  const splitWord = useMemo(() => word.toUpperCase().split(''), [word]);
  const [characters, setCharacters] = useState<Character[]>(
    splitWord.map((character, index) => ({
      character,
      id: `${character}-${index}`,
      placed: false,
      position: {
        x: 0,
        y: 0,
      },
    }))
  );
  const placeCharacter = (id: string) => {
    const newCharacters = characters.map((character) => ({
      ...character,
      placed: character.placed || character.id === id,
    }));
    setCharacters(newCharacters);
    return newCharacters;
  };
  useEffect(() => {
    const randomPosition = (max: number) =>
      Math.min(Math.max(Math.floor(Math.random() * max - max / 2), (-max / 2) * 0.7), (max / 2) * 0.7);
    setCharacters(
      splitWord.map((character, index) => ({
        character,
        id: `${character}-${index}`,
        placed: false,
        position: {
          x: randomPosition(containerSize.width), // Subtract letter width to keep within viewport
          y: randomPosition(containerSize.height * 0.5),
        },
      }))
    );
  }, [splitWord]);

  return {
    characters,
    placeCharacter,
  };
};

export default PlaceTheLetters;
