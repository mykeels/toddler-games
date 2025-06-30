import { useEffect, useMemo, useState } from 'react';
import { getNextCharacter, ANIMALS, FRUITS, shuffle, getOptions } from '@/utils/characters';
import { fx } from '@/utils/sound';
import Header from '@/Header/Header';
import Container from '@/Container';
import Card from '@/Card';
import Next from '@/Next';
import { useSpeak } from '@/utils/speak';
import { useConfetti } from '@/Confetti';
import { useLevel } from '@/Header/Levels';
import README from './README.md';
import { sleep } from '@/utils/sleep';
import { useRestart } from '@/utils/restart';
import { vibrate } from '@/utils/vibrate';

const CHARACTERS = [...ANIMALS, ...FRUITS].map((c) => ({
  ...c,
  letter: c.name[0].toLowerCase(),
}));

export type LetterToImageMatchingProps = {
  transformLetter?: (letter: string) => string;
  level?: number;
  onNext?: () => void;
};

export const LetterToImageMatching = ({
  transformLetter = (letter) => letter,
  onNext,
  ...props
}: LetterToImageMatchingProps) => {
  const { speak } = useSpeak();
  const { life, restart } = useRestart();
  const [state, setState] = useState<'playing' | 'interlude'>('playing');
  const goal = useMemo(
    () => getNextCharacter(CHARACTERS),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [life]
  );
  const level = useLevel();
  const noOfOptions = (props.level ?? level) + 1;
  const options = useMemo(
    () =>
      shuffle([
        goal,
        ...getOptions(
          CHARACTERS.filter((c) => c.letter !== goal.letter),
          noOfOptions - 1
        ),
      ]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [goal.letter, noOfOptions]
  );
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === goal.letter;

  const [showConfetti, Confetti] = useConfetti();

   
  const onLetterClick = async (character: { letter: string; name: string }) => {
    setSelected(character.letter);
    if (character.letter === goal.letter) {
      fx.correct.play();
      await sleep(300);
      speak(`${character.letter} for ${character.name}`);

      showConfetti();
    } else {
      fx.incorrect.play();
      await sleep(300);
      speak(`${character.letter} for ${character.name}`);
    }
    setSelected(character.letter);
    setState('interlude');
    vibrate();
  };

   
  const onNextClick = () => {
    setSelected(null);
    setState('playing');
    restart();
    onNext?.();
  };

   
  const speakGoal = async () => {
    for (let i = 0; i < 2; i++) {
      speak(goal.letter.toUpperCase(), { rate: 1.2 });
      await sleep(750);
    }
    speak(`${goal.letter} for`);
  };

  useEffect(() => {
    speakGoal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goal.name]);

  const transformedGoalLetter = useMemo(() => transformLetter(goal.letter), [goal.letter, transformLetter]);

  return (
    <Container key={life}>
      <Header title="Match Letter to Image" onRestart={onNextClick} Right={<Header.Info description={README} />}>
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          {state === 'interlude' ? `${transformedGoalLetter} for ${goal.name}` : `${transformedGoalLetter} for ...`}
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        <button className="text-center py-8 text-9xl font-bold" onClick={() => speak(goal.name)}>
          {transformedGoalLetter}
        </button>
        <div data-name="pair" className="flex justify-center flex-wrap gap-4">
          {options.map((option) => (
            <Card
              key={option.letter}
              value={option.letter}
              selectedValue={goal.letter}
              onClick={() => onLetterClick(option)}
              name="pair"
            >
              {option.value}
              {option.letter === goal.letter ? Confetti : null}
            </Card>
          ))}
        </div>
        <Next
          onNext={onNextClick}
          className={{
            invisible: !(state == 'interlude' && selected && isCorrect),
          }}
        />
      </div>
    </Container>
  );
};
