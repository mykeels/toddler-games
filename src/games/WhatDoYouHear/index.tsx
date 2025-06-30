import { useEffect, useMemo, useState } from 'react';
import classNames from 'clsx';
import { fx } from '@/utils/sound';
import { useSpeak } from '@/utils/speak';
import { vibrate } from '@/utils/vibrate';
import { useConfetti } from '@/Confetti';
import { useLevel } from '@/Header/Levels';
import { type Levels, WORDS } from '@/utils/words';
import Container from '@/Container';
import Header from '@/Header/Header';
import Next from '@/Next';
import README from './README.md';
import { getOptions, LETTERS } from '@/utils/characters';
import { useRestart } from '@/utils/restart';
import Card from '@/Card';
import { sleep } from '@/utils/sleep';
import { useQuery } from 'react-query';

type WhatDoYouHearProps = {
  getWordSet?: (level?: number) => (typeof WORDS)[Levels];
  level?: Levels;
  onNext?: () => void;
  uppercase?: boolean;
  standalone?: boolean;
};

const ONE_WORD_SET = LETTERS.map((letter) => ({
  value: letter.value,
  pronunciation: letter.value,
  image: letter.value,
}));

export const WhatDoYouHear = ({
  uppercase = false,
  getWordSet = (level) => (level === 1 ? ONE_WORD_SET : level ? WORDS[level as Levels] : WORDS[2]),
  onNext,
  standalone = false,
  ...props
}: WhatDoYouHearProps) => {
  const { speak } = useSpeak();
  const { life, restart } = useRestart();
  const level = useLevel();
  const noOfWordCharacters = Math.min(Number(props.level) || level, 6) as Levels;
  const wordSet = getWordSet(noOfWordCharacters);
  const getNextPair = () =>
    getOptions(
      wordSet
        .map((word) => (uppercase ? word.value.toUpperCase() : word.value))
        .map((word) => ({ value: word, name: word })),
      2
    );
  const [pair, setPair] = useState(getNextPair());
  const goal = useMemo(() => pair[Math.floor(Math.random() * pair.length)], [life, pair, level, noOfWordCharacters]);
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === goal.value;
  const [showConfetti, Confetti] = useConfetti();

  const onOptionClick = (option: string) => {
    setSelected(option);
  };

  useEffect(() => {
    if (!selected) {
      return;
    }
    if (selected === goal.value) {
      fx.correct.play();
      showConfetti();
    } else if (selected !== goal.value) {
      fx.incorrect.play();
      vibrate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, goal]);

  const onNextClick = () => {
    setPair(getNextPair());
    setSelected(null);
    restart();
    onNext?.();
  };

  const { isFetching } = useQuery({
    queryKey: ['what-do-you-hear', goal.value, life],
    queryFn: async () => {
      await speak('Listen! What do you hear?');
      for (let speakCount = 0; speakCount < 3; speakCount++) {
        speak(goal.value, { rate: 1.2 });
        await sleep(500);
      }
    },
  });

  return (
    <Container key={life}>
      <Header
        title="What do you hear?"
        onRestart={onNextClick}
        Right={standalone ? null : <Header.Info description={README} />}
        {...(standalone ? { Left: <div></div> } : {})}
      >
        <button className="focus:outline-none" onClick={() => speak(goal.value)}>
          What Do You Hear?
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        <div
          className={classNames('flex justify-center gap-4', {
            'opacity-50 pointer-events-none': isFetching,
          })}
        >
          {pair.map((option) => (
            <Card
              key={option.value}
              value={option.value}
              selectedValue={goal.value}
              onClick={() => onOptionClick(option.value)}
              name="pair"
              className={{
                width: 'w-auto',
                'px-8 py-4': true,
              }}
            >
              <span className={classNames('text-base sm:text-4xl text-center')}>{option.value}</span>
              {option.value === goal.value ? Confetti : null}
            </Card>
          ))}
        </div>
        <Next
          onNext={onNextClick}
          className={{
            invisible: !isCorrect,
          }}
        />
      </div>
    </Container>
  );
};

export default WhatDoYouHear;
