import { useEffect, useMemo, useRef, useState } from "react";
import classNames from "clsx";
import { onTouch } from "@/utils/touch";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";
import { useRestart } from "@/utils/restart";
import { type Levels, ALL_WORDS, WORDS } from "./ReadWords.const";
import { getNextCharacter } from "@/utils/characters";
import Next from "@/Next";
import { useConfetti } from "@/Confetti";

type ReadWordsProps = {
  getWordSet?: (level?: Levels) => typeof WORDS[Levels];
  level?: Levels;
}

export const ReadWords = ({ getWordSet = (level) => level ? WORDS[level] : ALL_WORDS, level = undefined }: ReadWordsProps) => {
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
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
        <div className="flex flex-wrap justify-center content-center items-center portrait:gap-2 landscape:gap-4 landscape:px-[10%]">
          {allLetters.map((letter, index) => (
            <Readable
              key={index}
              value={letter}
              character={characters[index]}
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
          <img src={goal.image} alt={goal.value} className={classNames("w-56 h-56 hsx:w-32 hsx:h-32 hsm:w-32 hsm:h-32 border-2 border-white rounded-lg")} />
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

function useTwin() {
  const index = useRef(0);
  const lastTwin = useRef<string | undefined>(undefined);
  const next = (character: string, isTwin: boolean) => {
    if (isTwin) {
      if (lastTwin.current && lastTwin.current !== character) {
        index.current = index.current + 1;
      } else if (lastTwin.current === character) {
        // do nothing
      } else {
        index.current = index.current + 1;
      }
      lastTwin.current = character;
    } else {
      lastTwin.current = undefined;
      index.current = 0;
    }
    console.log({
      isTwin,
      index: index.current,
      lastTwin: lastTwin.current
    });
    return index.current;
  }
  return {
    next,
    index
  }
}

function useReadWord(word: {
  value: string;
  pronunciation?: string;
}) {
  const allLetters = word.value.split("");
  const charactersWord = (word.pronunciation || word.value);
  const twin = useTwin();
  const characters = charactersWord.split("")
    .map((character, index) => ({
      value: character,
      speak: () => character in fx.phonics && fx.phonics[character as keyof typeof fx.phonics]?.play(),
      twin: twin.next(character, charactersWord[index + 1] === character || charactersWord[index - 1] === character)
    }));
  const [letters, setLetters] = useState<string[]>([]);
  const next = () => {
    const nextCharacter = characters[letters.length];
    const twinCharacter = characters[letters.length + 1];
    const isTwin = nextCharacter.twin;
    if (nextCharacter) {
      const newLetters = [...letters, nextCharacter.value, ...((isTwin && twinCharacter) ? [twinCharacter.value] : [])];
      setLetters(newLetters);

      if (newLetters.length >= allLetters.length) {
        setTimeout(() => {
          speak(word.value);
        }, 600);
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
  character,
  className,
  onClick,
  isReady,
  isComplete,
  isChecked
}: {
  value: string;
  character: {
    twin: number;
  };
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
        "portrait:w-[16dvw] portrait:h-[16dvw] landscape:w-[18dvh] landscape:h-[18dvh]",
        "landscape:text-5xl portrait:text-4xl portrait:lg:text-8xl landscape:hsx:text-3xl landscape:hsm:text-4xl",
        "border-2 border-black rounded text-black",
        "flex items-center justify-center font-bold",
        {
          "bg-yellow-300": isChecked && !character.twin,
          "bg-green-400": isChecked && character.twin && character.twin % 2 === 1,
          "bg-purple-300": isChecked && character.twin && character.twin % 2 === 0,
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