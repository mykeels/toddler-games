import { useEffect, useState } from 'react';
import classNames from 'clsx';
import { fx } from '@/utils/sound';
import Header from '@/Header/Header';
import Container from '@/Container';
import { vibrate } from '@/utils/vibrate';
import { useSpeak } from '@/utils/speak';
import README from './README.md';
import { LETTERS } from '@/utils/characters';
import { sleep } from '@/utils/sleep';
import { useQuery } from 'react-query';

const LETTER_VALUES = LETTERS.map((letter) => letter.value);

export const LetterKeypad = ({ shouldPlayPhonics = false }: { shouldPlayPhonics?: boolean }) => {
  const { speak } = useSpeak();
  const [recipient, setRecipient] = useState<string>('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dial = (letter: string) => {
    speak(shouldPlayPhonics ? letter.toLowerCase() : letter, { rate: 1.2 });
    setRecipient((recipient + letter).slice(-10));
    vibrate();
  };

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Tap a letter.`);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ignore speak dependency
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (LETTER_VALUES.some((letter) => letter.toLowerCase() === event.key.toLowerCase())) {
        const button = document.querySelector(`[data-letter="${event.key.toLowerCase()}"]`);
        if (button) {
          (button as HTMLButtonElement).click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [dial]);

  const playAll = async () => {
    for (const letter of LETTER_VALUES) {
      const button = document.querySelector(`[data-letter="${letter.toLowerCase()}"]`);
      (button as HTMLButtonElement)?.click();
      await sleep(700);
    }
    console.log('done');
  };
  const {
    refetch: playAllLetters,
    isRefetching,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['letter-keypad'],
    queryFn: async () => playAll(),
    enabled: false,
  });

  const isPlaying = isRefetching || isFetching || isLoading;

  console.log({ isPlaying });

  return (
    <Container>
      <Header onRestart={undefined} noLevels Right={<Header.Info description={README} />}>
        {recipient || '#'}
      </Header>
      <div className="flex flex-wrap justify-center content-center items-center gap-4 landscape:px-[10%] h-[90%]">
        <PlayAllButton onClick={() => playAllLetters()} isPlaying={isPlaying} />
        <>
          {LETTER_VALUES.map((letter, index) => (
            <LetterButton key={`${letter}-${index}`} value={letter} onClick={() => dial(letter)} />
          ))}
        </>
      </div>
    </Container>
  );
};

export default LetterKeypad;

function LetterButton({ value, onClick }: { value: string; onClick: (value: string) => void }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      data-letter={value.toLowerCase()}
      onClick={() => {
        onClick(value);
        vibrate();
        setClicked(true);
        setTimeout(() => setClicked(false), 700);
      }}
      className={classNames(
        'w-12 h-12 lg:w-24 lg:h-24 border-2 border-black flex items-center justify-center text-xl text-black font-bold rounded',
        {
          'bg-white': !clicked,
          'bg-brand-accent-yellow text-black animate-breathe': clicked,
        }
      )}
    >
      {value}
    </button>
  );
}

function PlayAllButton({ onClick, isPlaying }: { onClick: () => void; isPlaying: boolean }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      onClick={() => {
        onClick();
        vibrate();
        setClicked(true);
        setTimeout(() => setClicked(false), 700);
      }}
      className={classNames(
        'w-12 h-12 lg:w-24 lg:h-24 border-2 border-black flex items-center justify-center text-xl text-black font-bold rounded',
        {
          'bg-white': !clicked && !isPlaying,
          'bg-brand-accent-yellow text-black animate-breathe': clicked,
          'bg-brand-accent-green opacity-50': isPlaying,
        }
      )}
      disabled={isPlaying}
    >
      <img src="/icons/play-fill.svg" className="w-6 h-6" />
    </button>
  );
}
