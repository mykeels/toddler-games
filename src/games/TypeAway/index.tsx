import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";
import { useRestart } from "@/utils/restart";
import README from "./README.md";
import Letter from "../PlaceTheLetters/Letter/Letter";
import FloatAround from "@/FloatAround";

export const TypeAway = () => {
  const { life, restart } = useRestart();

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Type away!`);
  }, []);

  const { typed } = useTyped();

  return (
    <Container key={life}>
      <Header
        onRestart={restart}
        Right={
          <Header.Info description={README} />
        }
        noLevels
      >
        Type Away!
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
        <div className="block relative w-full h-full">
          {typed.map((t, index) => {
            const isLast = index === typed.length - 1;
            return (
              <FloatAround key={t.id} distance={70}>
                <Letter value={t.key} color={isLast ? "#17A6FF" : "black"} textShadowColor={isLast ? "#ccc" : "white"} />
              </FloatAround>
            )
          })}
        </div>
      </div>

    </Container>
  );
};

export default TypeAway;

function useTyped() {
  const [typed, setTyped] = useState<{ id: string, key: string, createdAt: Date }[]>([]);

  const handleKeyPress = (event: KeyboardEvent) => {
    setTyped(typed => [...typed, { id: nanoid(), key: event.key, createdAt: new Date() }]);
    vibrate();
    // speak(event.key);
    event.preventDefault();
    event.stopPropagation();
  }
  const KEY_PRESS_EVENT = "keyup";

  useEffect(() => {
    window.addEventListener(KEY_PRESS_EVENT, handleKeyPress);

    const MAX_TIME = 3000;

    const interval = setInterval(() => {
      setTyped(typed => [...typed.filter(t => {
        return (new Date().getTime() - new Date(t.createdAt).getTime()) <= MAX_TIME
      })]);
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener(KEY_PRESS_EVENT, handleKeyPress);
    }
  }, []);

  console.log(typed);

  return { typed: typed.map(t => ({ id: t.id, key: t.key })) };
}
