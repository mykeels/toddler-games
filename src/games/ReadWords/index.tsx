import { useEffect, useMemo, useRef, useState } from "react";
import classNames, { clsx } from "clsx";
import { onTouch } from "@/utils/touch";
import { fx, Phonics } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";
import { useRestart } from "@/utils/restart";
import { type Levels, ALL_WORDS, WORDS } from "@/utils/words";
import { getNextCharacter } from "@/utils/characters";
import Next from "@/Next";
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";
import README from "./README.md";

type ReadWordsProps = {
  getWordSet?: (level?: Levels) => (typeof WORDS)[Levels];
  level?: Levels;
  onNext?: () => void;
  standalone?: boolean;
};

export const ReadWords = ({
  getWordSet = (level) => (level ? WORDS[level] : ALL_WORDS),
  onNext,
  standalone,
  ...props
}: ReadWordsProps) => {
  const { life, restart } = useRestart();
  const level = useLevel();
  const noOfWordCharacters = Math.min(
    (Number(props.level) || level) + 1,
    6
  ) as Levels;
  const goal = useMemo(
    () => getNextCharacter(getWordSet(noOfWordCharacters)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [life, noOfWordCharacters]
  );
  const reader = useReadWord(goal);
  const { letters, allLetters } = reader;
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

  const onNextClick = () => {
    restart();
    onNext?.();
  };

  const isCompleted = letters.length === allLetters.length;

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onNextClick();
      } else if (event.key === " ") {
        if (!isCompleted) {
          speak(goal.value);
        } else {
          onNextClick();
        }
      } else if (
        allLetters.map((l) => l.toLowerCase()).includes(event.key.toLowerCase())
      ) {
        const button = document.querySelector(
          `[data-value="${event.key.toLowerCase()}"][data-readable="true"]`
        );
        if (button) {
          button.tap();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, isCompleted, goal.value]);

  return (
    <Container key={life}>
      <Header
        onRestart={restart}
        Right={standalone ? null : <Header.Info description={README} />}
        {...(standalone ? { Left: <div></div> } : {})}
      >
        <button
          className="focus:outline-none"
          onClick={() => {
            speak(goal.value);
          }}
        >
          {goal.value}
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
        <ReadWord goal={goal} reader={reader} />
        <button
          className={classNames("flex flex-col items-center justify-center", {
            invisible: letters.length !== allLetters.length,
          })}
          onClick={() => {
            speak(goal.value);
          }}
        >
          {Confetti}
          {!!goal.image && (
            <img
              src={goal.image}
              alt={goal.value}
              className={classNames(
                "w-56 h-56 hsx:w-32 hsx:h-32 hsm:w-32 hsm:h-32 border-2 border-white rounded-lg"
              )}
            />
          )}
        </button>
        <Next
          onNext={onNextClick}
          className={{
            invisible: letters.length !== allLetters.length,
          }}
        />
      </div>
    </Container>
  );
};

export default ReadWords;

export const ReadWord = ({
  goal,
  reader,
  standalone,
  className,
}: {
  goal: { value: string; pronunciation?: string };
  reader?: ReturnType<typeof useReadWord>;
  standalone?: boolean;
  className?: string | Record<string, boolean>;
}) => {
  const _reader = useReadWord(goal);
  const { next, letters, allLetters, characters } = reader || _reader;
  return (
    <div
      data-word={goal.value}
      className={clsx(
        "flex justify-center content-center items-center bg-brand-primary",
        {
          "portrait:gap-2 landscape:gap-4 landscape:px-[10%]":
            allLetters.length < 5,
          "gap-1": allLetters.length >= 5,
          "flex-wrap": !standalone,
        },
        className
      )}
    >
      {allLetters.map((letter, index) => (
        <Readable
          key={index}
          value={letter}
          word={goal.value}
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
          noOfCharacters={allLetters.length}
        />
      ))}
    </div>
  );
};

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
      lastTwin: lastTwin.current,
    });
    return index.current;
  };
  return {
    next,
    index,
  };
}

function useReadWord(word: { value: string; pronunciation?: string }) {
  const allLetters = word.value.split("");
  const charactersWord = word.pronunciation || word.value;
  const twin = useTwin();
  const characters = charactersWord.split("").map((character, index) => ({
    index,
    value: character,
    speak: () =>
      character in fx.phonics && fx.phonics[character as Phonics]?.play(),
    twin: twin.next(
      character,
      charactersWord[index + 1] === character ||
        charactersWord[index - 1] === character
    ),
  }));
  const [letters, setLetters] = useState<string[]>([]);
  const next = () => {
    const nextCharacter = characters[letters.length];
    let nextCharacterIndex = letters.length + 1;
    const twinCharacters = [];
    while (
      characters[nextCharacterIndex]?.value === nextCharacter.value &&
      characters[nextCharacterIndex].twin
    ) {
      const nextCharacter = characters[nextCharacterIndex];
      twinCharacters.push(nextCharacter);
      nextCharacterIndex++;
    }
    if (nextCharacter) {
      const newLetters = [
        ...letters,
        nextCharacter.value,
        ...twinCharacters.map((c) => c.value),
      ];
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
    characters,
  };
}

function Readable({
  value,
  character,
  word,
  className,
  onClick,
  isReady,
  isComplete,
  isChecked,
  noOfCharacters,
}: {
  value: string;
  word: string;
  character: {
    twin: number;
    index: number;
  };
  className?: string;
  onClick: () => void;
  isReady: boolean;
  isComplete: boolean;
  isChecked: boolean;
  noOfCharacters: number;
}) {
  const onTap = () => {
    onClick();
    if (!isReady) {
      return;
    }
  };
  const characterId = character.twin
    ? `twin-${character.twin}`
    : `char-${character.index}`;
  return (
    <button
      {...onTouch(() => {
        onTap();
        const allButtons = document.querySelectorAll(
          `[data-word="${word}"] [data-character-id="${characterId}"]`
        );
        allButtons.forEach((button) => {
          button.classList.add("animate-vibrate");
        });
        setTimeout(() => {
          allButtons.forEach((button) => {
            button.classList.remove("animate-vibrate");
          });
        }, 300);
      })}
      data-character-id={characterId}
      data-value={value.toLowerCase()}
      data-readable={isReady && !isComplete && !isChecked}
      className={classNames(
        {
          "portrait:w-[16dvw] portrait:h-[16dvw] landscape:w-[18dvh] landscape:h-[18dvh] landscape:text-5xl portrait:text-4xl portrait:lg:text-8xl landscape:hsx:text-3xl landscape:hsm:text-4xl border-4":
            noOfCharacters < 5,
          "portrait:w-[14dvw] portrait:h-[14dvw] landscape:w-[16dvh] landscape:h-[16dvh] landscape:text-4xl portrait:text-3xl portrait:lg:text-7xl landscape:hsx:text-2xl landscape:hsm:text-3xl border-4":
            noOfCharacters >= 5 && noOfCharacters < 7,
          "portrait:w-[12dvw] portrait:h-[12dvw] landscape:w-[14dvh] landscape:h-[14dvh] landscape:text-4xl portrait:text-3xl portrait:lg:text-7xl landscape:hsx:text-2xl landscape:hsm:text-3xl border-2":
            noOfCharacters >= 7 && noOfCharacters < 9,
          "portrait:w-[10dvw] portrait:h-[10dvw] landscape:w-[12dvh] landscape:h-[12dvh] landscape:text-3xl portrait:text-2xl portrait:lg:text-6xl landscape:hsx:text-xl landscape:hsm:text-2xl border-2":
            noOfCharacters >= 9 && noOfCharacters < 11,
          "portrait:w-[8dvw] portrait:h-[8dvw] landscape:w-[10dvh] landscape:h-[10dvh] landscape:text-2xl portrait:text-xl portrait:lg:text-5xl landscape:hsx:text-lg landscape:hsm:text-xl border-2":
            noOfCharacters >= 11,
        },
        "rounded text-black",
        "flex items-center justify-center font-bold",
        {
          "bg-yellow-300": isChecked,
          "border-black": isChecked && !character.twin,
          "border-green-700 text-green-700":
            character.twin && character.twin % 2 === 1,
          "border-purple-700 text-purple-700":
            character.twin && character.twin % 2 === 0,
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
