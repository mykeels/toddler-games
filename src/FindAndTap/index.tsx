import { useMemo, useState } from "react";
import classNames from "clsx";

import { LETTERS_OR_NUMBERS } from "./FindAndTap.const";

function FindAndTap() {
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const [pair, setPair] = useState<string[]>(getRandomPair());
  const [selected, setSelected] = useState<string | null>(null);
  const goal = useMemo(
    () => pair[Math.floor(Math.random() * pair.length)],
    [pair]
  );

  const onLetterOrNumberClick = (letterOrNumber: string) => {
    setSelected(letterOrNumber);
    setState("interlude");
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  const onNextClick = () => {
    setSelected(null);
    setPair(getRandomPair());
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

  return (
    <>
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
            Next
          </button>
        </div>
      ) : null}
    </>
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
      onMouseDown={() => onClick(value)}
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

function getRandomPair(): [string, string] {
  const firstIndex = Math.floor(Math.random() * LETTERS_OR_NUMBERS.length);
  let secondIndex = Math.floor(Math.random() * LETTERS_OR_NUMBERS.length);
  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * LETTERS_OR_NUMBERS.length);
  }
  return [LETTERS_OR_NUMBERS[firstIndex], LETTERS_OR_NUMBERS[secondIndex]];
}
