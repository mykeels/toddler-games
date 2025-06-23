import { useEffect, useMemo, useState } from 'react';

import { Character, CHARACTERS, getOptions } from '@/utils/characters';
import { useHorizontalSwipe } from '@/utils/swipe';
import { fx } from '@/utils/sound';
import Header from '@/Header/Header';
import Container from '@/Container';
import { vibrate } from '@/utils/vibrate';
import Card from '@/Card';
import Next from '@/Next';
import { speak } from '@/utils/speak';
import { useConfetti } from '@/Confetti';
import { useLevel } from '@/Header/Levels';
import README from './README.md';
import { useMountTime } from '@/hooks/useMountTime';

export type FindAndTapProps = {
  getCharacterSet?: (set: typeof CHARACTERS) => Character[];
  level?: number;
  onNext?: () => void;
};

export function FindAndTap({
  getCharacterSet = (set: typeof CHARACTERS) => set.uppercaseLetters,
  onNext,
  ...props
}: FindAndTapProps) {
  const characters = getCharacterSet(CHARACTERS);
  const [gameIndex, setGameIndex] = useState(0);
  const [state, setState] = useState<'playing' | 'interlude'>('playing');
  const level = useLevel();
  const noOfOptions = (props.level ?? level) + 1;
  const getNextPair = () => getOptions(characters, noOfOptions);
  const [pair, setPair] = useState<Character[]>(getNextPair());
  const { elapsedTime } = useMountTime();
  useEffect(() => {
    if (elapsedTime().seconds < 3) {
      return;
    }
    setPair(getNextPair());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfOptions]);
  const goal = useMemo(() => pair[Math.floor(Math.random() * pair.length)], [pair]);
  const [selected, setSelected] = useState<Character | null>(null);
  const isCorrect = selected?.value === goal.value;

  const [showConfetti, Confetti] = useConfetti();

  const onLetterOrNumberClick = (letterOrNumber: Character) => {
    setSelected(letterOrNumber);
    setState('interlude');
  };
  useEffect(() => {
    if (!selected) {
      return;
    }
    if (selected.value === goal.value) {
      fx.correct.play();
      showConfetti();
    } else if (selected.value !== goal.value) {
      fx.incorrect.play();
      vibrate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, goal]);

  const onNextClick = () => {
    setPair(getNextPair());
    setState('playing');
    setGameIndex(gameIndex + 1);
    setSelected(null);
    onNext?.();
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      const options = pair.map((character) => character.value.toLowerCase());
      if (options.includes(event.key.toLowerCase())) {
        const button = document.querySelector(`[data-value="${event.key.toLowerCase()}"]`);
        if (button) {
          button.tap();
        }
      } else if (event.key === 'Enter') {
        onNextClick();
      } else if (event.key === ' ') {
        if (!isCorrect) {
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
  }, [onNextClick, onLetterOrNumberClick, pair]);

  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick(),
  });

  const speakGoal = () => {
    speak(`Tap ${goal.name}`);
  };

  useEffect(speakGoal, [goal, gameIndex]);

  return (
    <Container ref={ref as React.LegacyRef<HTMLDivElement>} key={`game:${gameIndex}-options:${noOfOptions}`}>
      <Header title="Find and Tap" onRestart={onNextClick} Right={<Header.Info description={README} />}>
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          Tap {goal.value}
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-16">
        <div data-name="pair" className="flex justify-center flex-wrap gap-4">
          {pair.map((character) => (
            <Card
              key={character.value}
              value={character.value}
              selectedValue={goal.value}
              onClick={() => onLetterOrNumberClick(character)}
              name="pair"
              className="px-2"
            >
              {character.value}
              {character.value === goal.value ? Confetti : null}
            </Card>
          ))}
        </div>
        <Next
          onNext={onNextClick}
          className={{
            invisible: !(state == 'interlude' && isCorrect),
          }}
        />
      </div>
    </Container>
  );
}

export default FindAndTap;
