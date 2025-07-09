import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { fx } from '@/utils/sound';
import Header from '@/Header/Header';
import Container from '@/Container';
import { vibrate } from '@/utils/vibrate';
import { speak, useSpeak } from '@/utils/speak';
import { useRestart } from '@/utils/restart';
import README from './README.md';
import Letter from '../PlaceTheLetters/Letter/Letter';
import FloatAround from '@/FloatAround';

export const TypeAway = () => {
  const { life, restart } = useRestart();

  useEffect(() => {
    fx.game.play();
  }, []);

  const speakGoal = () => {
    speak(`Type away!`);
  };
  useEffect(speakGoal, []);

  const ref = useRef<HTMLTextAreaElement>(null);

  const { typed } = useTyped(ref);

  useEffect(() => {
    const textarea = document.getElementById('type-away');
    if (textarea) {
      textarea.focus();
    }
  }, []);

  return (
    <Container key={life}>
      <Header onRestart={restart} Right={<Header.Info description={README} />} noLevels>
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          Type Away!
        </button>
      </Header>
      <div className="relative flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
        <div className="block relative w-full h-full">
          {typed.map((t, index) => {
            const isLast = index === typed.length - 1;
            return (
              <FloatAround key={t.id} distance={70}>
                <Letter
                  value={t.key}
                  color={isLast ? '#17A6FF' : 'black'}
                  textShadowColor={isLast ? '#ccc' : 'white'}
                />
              </FloatAround>
            );
          })}
        </div>
        <textarea
          ref={ref}
          id="type-away"
          className="absolute top-0 bottom-0 left-0 right-0 w-full grow p-2 border-none outline-none resize-none focus:outline-none bg-transparent text-white text-4xl"
        />
      </div>
    </Container>
  );
};

export default TypeAway;

function useTyped(ref: React.RefObject<HTMLTextAreaElement>) {
  const { speak } = useSpeak();
  const [typed, setTyped] = useState<{ id: string; key: string; createdAt: Date }[]>([]);

  const handleKeyPress = (event: KeyboardEvent) => {
    const excludedKeys = ['CapsLock', 'Shift'];
    if (excludedKeys.includes(event.key)) return;
    setTyped((typed) => [...typed, { id: nanoid(), key: event.key, createdAt: new Date() }]);
    vibrate();
    speak(event.key, { rate: 1.2 });
    event.preventDefault();
    event.stopPropagation();
  };
  const KEY_PRESS_EVENT = 'keyup';

  useEffect(() => {
    ref.current?.addEventListener(KEY_PRESS_EVENT, handleKeyPress);

    const MAX_TIME = 3000;

    const interval = setInterval(() => {
      setTyped((typed) => [
        ...typed.filter((t) => {
          return new Date().getTime() - new Date(t.createdAt).getTime() <= MAX_TIME;
        }),
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
      ref.current?.removeEventListener(KEY_PRESS_EVENT, handleKeyPress);
    };
  }, []);

  return { typed: typed.map((t) => ({ id: t.id, key: t.key })) };
}
