/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import { useState } from "react";
import classNames from "clsx";

import "./App.css";

function App() {
  const pkgVersion = __APP_VERSION__;
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const [pair, setPair] = useState<string[]>(getRandomPair());
  const [selected, setSelected] = useState<string | null>(null);

  const onLetterOrNumberClick = (letterOrNumber: string) => {
    setSelected(letterOrNumber);
    setState("interlude");
  };
  const onNextClick = () => {
    setSelected(null);
    setPair(getRandomPair());
    setState("playing");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex-grow max-h-[90vh]">
          {state === "playing" ? (
            <h1 className="text-4xl text-gray-800">What is this?</h1>
          ) : null}
          <div data-name="pair" className="flex justify-center space-x-8 mt-8">
            <button
              onMouseDown={() => onLetterOrNumberClick(pair[0])}
              className={classNames(
                "w-72 border-8 border-gray-800 flex items-center justify-center text-9xl font-bold",
                {
                  "bg-blue-200 animate-breathe": selected === pair[0],
                  "h-72": state !== "interlude",
                }
              )}
            >
              {pair[0]}
            </button>
            <button
              onMouseDown={() => onLetterOrNumberClick(pair[1])}
              className={classNames(
                "w-72 border-8 border-gray-800 flex items-center justify-center text-9xl font-bold",
                {
                  "bg-blue-200 animate-breathe": selected === pair[1],
                  "h-72": state !== "interlude",
                }
              )}
            >
              {pair[1]}
            </button>
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
        </main>
        <footer className="text-gray-800 text-sm text-center">
          {pkgVersion}
        </footer>
      </div>
    </>
  );
}

export default App;

function getRandomPair(): [string, string] {
  const firstIndex = Math.floor(Math.random() * LETTERS_OR_NUMBERS.length);
  let secondIndex = Math.floor(Math.random() * LETTERS_OR_NUMBERS.length);
  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * LETTERS_OR_NUMBERS.length);
  }
  return [LETTERS_OR_NUMBERS[firstIndex], LETTERS_OR_NUMBERS[secondIndex]];
}

var LETTERS_OR_NUMBERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
