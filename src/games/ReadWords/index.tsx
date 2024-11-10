import { useEffect, useMemo, useState } from "react";
import classNames from "clsx";
import { onTouch } from "@/utils/touch";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";
import { useRestart } from "@/utils/restart";
import { PHONICS_LETTERS, WORDS } from "./ReadWords.const";
import { getNextCharacter } from "@/utils/characters";
import Next from "@/Next";

type ReadWordsProps = {
  getWordSet?: (level: 2 | 3) => typeof WORDS[2 | 3];
  level?: 2 | 3;
}

export const ReadWords = ({ getWordSet = () => [...WORDS[2], ...WORDS[3]], level = 2 }: ReadWordsProps) => {
  const { life, restart } = useRestart();
  const goal = useMemo(
    () => getNextCharacter(getWordSet(level)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [life]
  );
  const { next, letters, allLetters, characters } = useReadWord(goal);

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Can you read this?`);
  }, []);

  return (
    <Container key={life}>
      <Header onRestart={restart}>
        {goal}
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-16">
        <div className="flex flex-wrap justify-center content-center items-center gap-4 landscape:px-[10%]">
          {allLetters.map((letter, index) => (
            <Readable
              key={index}
              value={letter}
              isReady={letters.length === index}
              onClick={() => {
                next();
                if (letters.length >= index) {
                  vibrate();
                  characters[index]?.speak();
                }
              }}
              isComplete={letters.length === allLetters.length}
            />
          ))}
        </div>
        <Next
          onNext={restart}
          className={{
            invisible: letters.length !== allLetters.length
          }}
        />
      </div>

    </Container>
  );
};

export default ReadWords;

function useReadWord(word: string) {
  const allLetters = word.split("");
  const characters = allLetters.map(character => PHONICS_LETTERS.find(letter => letter.value.toLowerCase() === character));
  const [letters, setLetters] = useState<string[]>([]);
  console.log({
    characters,
  });
  const next = () => {
    const nextCharacter = characters[letters.length];
    console.log({ nextCharacter });
    if (nextCharacter) {
      const newLetters = [...letters, nextCharacter.value];
      setLetters(newLetters);

      if (newLetters.length === allLetters.length) {
        setTimeout(() => {
          speak(word);
        }, 1000);
      }
    }
  };
  useEffect(() => {
    setLetters([]);
  }, [word]);
  return {
    next,
    letters,
    allLetters,
    characters
  }
}

function Readable({
  value,
  className,
  onClick,
  isReady,
  isComplete
}: {
  value: string;
  className?: string;
  onClick: () => void;
  isReady: boolean;
  isComplete: boolean;
}) {
  const [checked, setChecked] = useState(false);
  const onTap = () => {
    onClick();
    if (!isReady) {
      return;
    }
    setChecked(true);
  };
  return (
    <button
      {...onTouch(onTap)}
      className={classNames(
        "w-24 h-24 lg:w-32 lg:h-32 border-2 border-black rounded text-black",
        "flex items-center justify-center text-5xl lg:text-8xl font-bold",
        {
          "bg-yellow-300": checked,
          "animate-breathe": !isComplete && checked,
          "bg-white hover:bg-blue-200": !checked,
        },
        className
      )}
    >
      {value}
    </button>
  );
}