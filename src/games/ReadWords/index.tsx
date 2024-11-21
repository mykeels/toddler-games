import { useEffect, useMemo, useState } from "react";
import classNames from "clsx";
import { onTouch } from "@/utils/touch";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";
import { useRestart } from "@/utils/restart";
import { type Levels, ALL_WORDS, PHONICS_LETTERS, WORDS } from "./ReadWords.const";
import { getNextCharacter } from "@/utils/characters";
import Next from "@/Next";
import { useConfetti } from "@/Confetti";

type ReadWordsProps = {
  getWordSet?: (level: Levels) => typeof WORDS[Levels];
  level?: Levels;
}

export const ReadWords = ({ getWordSet = () => ALL_WORDS, level = 2 }: ReadWordsProps) => {
  const { life, restart } = useRestart();
  const goal = useMemo(
    () => getNextCharacter(getWordSet(level)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [life]
  );
  const { next, letters, allLetters, characters } = useReadWord(goal);
  const [showConfetti, Confetti] = useConfetti();

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Can you read this?`);
  }, []);

  useEffect(() => {
    if (letters.length === allLetters.length) {
      showConfetti();
    }
  }, [letters.length, allLetters.length]);

  return (
    <Container key={life}>
      <Header onRestart={restart}>
        {goal.value}
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-16">
        <div className="flex flex-wrap justify-center content-center items-center gap-4 landscape:px-[10%]">
          {allLetters.map((letter, index) => (
            <Readable
              key={index}
              value={letter}
              isReady={letters.length >= index}
              onClick={() => {
                if (letters.length === index) {
                  next();
                }
                if (letters.length >= index) {
                  vibrate();
                  characters[index]?.speak();
                }
              }}
              isComplete={letters.length === allLetters.length}
              isChecked={letters.length >= index + 1}
            />
          ))}
        </div>
        <button className={classNames("flex flex-col items-center justify-center", {
          'invisible': letters.length !== allLetters.length
        })} onClick={() => {
          speak(goal.value);
        }}>
          {Confetti}
          <img src={goal.image} alt={goal.value} className={classNames("w-64 h-64 border-2 border-white rounded-lg")} />
        </button>
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

function useReadWord(word: {
  value: string;
  pronunciation?: string;
}) {
  const allLetters = word.value.split("");
  const characters = (word.pronunciation || word.value).split("")
    .map(character => PHONICS_LETTERS.find(letter => letter.value.toLowerCase() === character));
  const [letters, setLetters] = useState<string[]>([]);
  const next = () => {
    const nextCharacter = characters[letters.length];
    const twinCharacter = characters[letters.length + 1];
    const isTwin = nextCharacter?.value.toLowerCase() === twinCharacter?.value.toLowerCase();
    if (nextCharacter) {
      const newLetters = [...letters, nextCharacter.value, ...((isTwin && twinCharacter) ? [twinCharacter.value] : [])];
      setLetters(newLetters);

      if (newLetters.length >= allLetters.length) {
        setTimeout(() => {
          speak(word.value);
        }, 1200);
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
  isComplete,
  isChecked
}: {
  value: string;
  className?: string;
  onClick: () => void;
  isReady: boolean;
  isComplete: boolean;
  isChecked: boolean;
}) {
  const onTap = () => {
    onClick();
    if (!isReady) {
      return;
    }
  };
  return (
    <button
      {...onTouch(onTap)}
      className={classNames(
        "w-24 h-24 lg:w-32 lg:h-32 border-2 border-black rounded text-black",
        "flex items-center justify-center text-5xl lg:text-8xl font-bold",
        {
          "bg-yellow-300": isChecked,
          "animate-breathe": !isComplete && isChecked,
          "bg-white hover:bg-blue-200": !isChecked,
        },
        className
      )}
    >
      {value}
    </button>
  );
}