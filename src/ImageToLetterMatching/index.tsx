import { useEffect, useMemo, useState } from "react";
import classNames from "clsx";
import { IMAGES, UPPERCASE_LETTERS } from "./ImageToLetterMatching.const";
import { useHorizontalSwipe } from "../utils/swipe";
import { onTouch } from "../utils/touch";
import { fx } from "../utils/sound";

export const ImageToLetterMatching = ({
  transformLetter = (letter) => letter,
}: {
  transformLetter?: (letter: string) => string;
}) => {
  const [gameIndex, setGameIndex] = useState(0);
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const [selected, setSelected] = useState<string | null>(null);
  const image = useMemo(
    () => IMAGES[Math.floor(Math.random() * IMAGES.length)],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gameIndex]
  );
  const letters = useMemo(
    () =>
      shuffleArray([
        image.word[0],
        UPPERCASE_LETTERS[Math.floor(Math.random() * UPPERCASE_LETTERS.length)],
      ]).map(transformLetter),
      // eslint-disable-next-line react-hooks/exhaustive-deps
    [image.word]
  );
  const goal = transformLetter(image.word[0]);
  const isCorrect = (letterOrNumber: string) => letterOrNumber === goal;
  const isItemCorrect = (item: string) =>
    selected === item && item === goal
      ? true
      : selected === item && item !== goal
        ? false
        : null;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLetterClick = (letter: string) => {
    if (isCorrect(letter)) {
      fx.correct.play();
    } else {
      fx.incorrect.play();
    }
    setSelected(letter);
    setState("interlude");
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNextClick = () => {
    fx.click.play();
    setSelected(null);
    setGameIndex(gameIndex + 1);
    setState("playing");
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        onNextClick();
      } else if (event.key === "ArrowLeft") {
        onLetterClick(letters[0]);
      } else if (event.key === "ArrowRight") {
        onLetterClick(letters[1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, onLetterClick, letters]);

  useEffect(() => {
    fx.game.play();
  }, []);

  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick(),
  });

  return (
    <div
      key={gameIndex}
      className="h-full"
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <h1 className="text-4xl text-gray-800">
        {state === "interlude"
          ? `${image.word} starts with ${goal}`
          : `${image.word} starts with...`}
      </h1>
      <div className="text-center py-8 text-9xl font-bold">{image.image}</div>
      <div data-name="pair" className="flex justify-center space-x-8">
        <Card
          value={letters[0]}
          onClick={onLetterClick}
          isCorrect={isItemCorrect(letters[0])}
        />
        <Card
          value={letters[1]}
          onClick={onLetterClick}
          isCorrect={isItemCorrect(letters[1])}
        />
      </div>
      {state == "interlude" && selected && isCorrect(selected) ? (
        <div
          data-name="interlude"
          className="flex flex-col items-center justify-center py-16 space-y-8"
        >
          <button
            onMouseDown={onNextClick}
            className="px-16 py-4 text-6xl text-gray-800 border-8 border-gray-800 p-4 rounded-md"
          >
            👍
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ImageToLetterMatching;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Card({
  value,
  onClick,
  isCorrect,
}: {
  value: string;
  onClick: (value: string) => void;
  isCorrect: boolean | string | null;
}) {
  return (
    <button
      {...onTouch(() => onClick(value))}
      className={classNames(
        "w-32 h-32 border-8 border-gray-800 flex items-center justify-center text-9xl font-bold",
        {
          "bg-green-300 animate-breathe": isCorrect === true,
          "bg-red-300": isCorrect === false,
        }
      )}
    >
      {value}
    </button>
  );
}
