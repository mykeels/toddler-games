import { useEffect, useState } from 'react';
import classNames from 'clsx';
import { fx } from '@/utils/sound';
import Header from '@/Header/Header';
import Container from '@/Container';
import { vibrate } from '@/utils/vibrate';
import { useSpeak } from '@/utils/speak';
import README from './README.md';
import { sleep } from '@/utils/sleep';
import { useQuery } from 'react-query';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const NumberKeypad = () => {
  const { speak } = useSpeak();
  const [recipient, setRecipient] = useState<string>('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dial = (digit: string) => {
    speak(digit, { rate: 1.2 });
    setRecipient((recipient + digit).slice(-10));
    vibrate();
  };

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Dial a number.`);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ignore speak dependency
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (digits.includes(event.key)) {
        const button = document.querySelector(`[data-digit="${event.key}"]`);
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
    for (const digit of DIGITS) {
      const button = document.querySelector(`[data-digit="${digit}"]`);
      (button as HTMLButtonElement)?.click();
      await sleep(700);
    }
  };
  const {
    refetch: playAllDigits,
    isRefetching,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['number-keypad'],
    queryFn: async () => playAll(),
    enabled: false,
  });
  const isPlaying = isRefetching || isFetching || isLoading;

  return (
    <Container>
      <Header onRestart={undefined} noLevels Right={<Header.Info description={README} />}>
        {recipient || '#'}
      </Header>
      <div className="flex flex-wrap justify-center content-center items-center gap-4 landscape:px-[10%] h-[90%]">
        <PlayAllButton onClick={() => playAllDigits()} isPlaying={isPlaying} />

        {DIGITS.map((digit, index) => (
          <DigitButton key={`${digit}-${index}`} value={digit} onClick={() => dial(digit)} />
        ))}
      </div>
    </Container>
  );
};

export default NumberKeypad;

function DigitButton({ value, onClick }: { value: string; onClick: (value: string) => void }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      data-digit={value}
      onClick={() => {
        onClick(value);
        vibrate();
        setClicked(true);
        setTimeout(() => setClicked(false), 700);
      }}
      className={classNames(
        'w-24 h-24 lg:w-32 lg:h-32 border-2 border-black flex items-center justify-center text-3xl text-black font-bold rounded',
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
        'w-24 h-24 lg:w-32 lg:h-32 border-2 border-black flex items-center justify-center text-3xl text-black font-bold rounded',
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
