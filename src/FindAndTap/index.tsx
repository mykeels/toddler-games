import { useEffect, useMemo, useState } from "react";
import classNames from "clsx";

import { CHARACTERS } from "./FindAndTap.const";
import { onTouch } from "../utils/touch";
import { useHorizontalSwipe } from "../utils/swipe";
import { fx } from "../utils/sound";

function FindAndTap({
  getCharacterSet = (set: typeof CHARACTERS) =>
    set.uppercaseLetters,
}: {
  getCharacterSet?: (set: typeof CHARACTERS) => string[];
} = {}) {
  const characters = getCharacterSet(CHARACTERS);
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const getNextPair = () => getRandomPair(characters);
  const [pair, setPair] = useState<string[]>(getNextPair());
  const [selected, setSelected] = useState<string | null>(null);
  const goal = useMemo(
    () => pair[Math.floor(Math.random() * pair.length)],
    [pair]
  );
  const isCorrect = (letterOrNumber: string) => letterOrNumber === goal;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLetterOrNumberClick = (letterOrNumber: string) => {
    if (isCorrect(letterOrNumber)) {
      fx.correct.play();
    } else {
      fx.incorrect.play();
    }
    setSelected(letterOrNumber);
    setState("interlude");
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNextClick = () => {
    fx.click.play();
    setSelected(null);
    setPair(getNextPair());
    setState("playing");
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  const isItemCorrect = (item: string) =>
    selected === item && item === goal
      ? true
      : selected === item && item !== goal
        ? false
        : null;

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        onNextClick();
      } else if (event.key === "ArrowLeft") {
        onLetterOrNumberClick(pair[0]);
      } else if (event.key === "ArrowRight") {
        onLetterOrNumberClick(pair[1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, onLetterOrNumberClick, pair]);

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    fx.tapOnAlphabet[
      goal.toLowerCase() as keyof typeof fx.tapOnAlphabet
    ]?.play();
    fx.tapOnNumbers[
      goal as keyof typeof fx.tapOnNumbers
    ]?.play();
  }, [goal]);

  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick(),
  });

  return (
    <div className="h-full" ref={ref as React.LegacyRef<HTMLDivElement>}>
      <h1 className="text-4xl text-gray-800">Tap on {goal}</h1>
      <div data-name="pair" className="flex justify-center space-x-8 mt-8">
        <Card
          value={pair[0]}
          onClick={onLetterOrNumberClick}
          isCorrect={isItemCorrect(pair[0])}
          fullHeight={state !== "interlude"}
        />
        <Card
          value={pair[1]}
          onClick={onLetterOrNumberClick}
          isCorrect={isItemCorrect(pair[1])}
          fullHeight={state !== "interlude"}
        />
      </div>
      {state == "interlude" ? (
        <div
          data-name="interlude"
          className="flex flex-col items-center justify-center py-24 space-y-8"
        >
          <button
            onMouseDown={onNextClick}
            className="px-16 py-8 text-8xl text-gray-800 border-8 border-gray-800 p-4 rounded-md"
          >
            👍
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default FindAndTap;

function Card({
  value,
  onClick,
  isCorrect,
  fullHeight,
}: {
  value: string;
  onClick: (value: string) => void;
  isCorrect: boolean | string | null;
  fullHeight: boolean;
}) {
  return (
    <button
      {...onTouch(() => onClick(value))}
      className={classNames(
        "w-72 border-8 border-gray-800 flex items-center justify-center text-9xl font-bold",
        {
          "bg-green-300 animate-breathe": isCorrect === true,
          "bg-red-300": isCorrect === false,
          "h-72": fullHeight,
          "h-48": !fullHeight,
        }
      )}
    >
      {value}
    </button>
  );
}

function getRandomPair(characters: string[]): [string, string] {
  const firstIndex = Math.floor(Math.random() * characters.length);
  let secondIndex = Math.floor(Math.random() * characters.length);
  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * characters.length);
  }
  return [characters[firstIndex], characters[secondIndex]];
}
