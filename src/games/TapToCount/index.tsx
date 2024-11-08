import { useEffect, useState } from "react";
import classNames from "clsx";
import { FRUITS, ANIMALS } from "@/utils/characters";
import { onTouch } from "@/utils/touch";
import { useHorizontalSwipe } from "@/utils/swipe";
import { fx } from "@/utils/sound";
import Container from "@/Container";
import Header from "@/Header/Header";
import Next from "@/Next";
import { speak } from "@/utils/speak";

const COUNTABLES = [...FRUITS, ...ANIMALS];

const TapToCount = () => {
  const [gameId, setGameId] = useState(0);
  const [items, setItems] = useState<
    {
      target: number;
      text: string;
    }[]
  >(getNextItems());
  const { ref } = useHorizontalSwipe({
    onSwipe: () => reset()
  });
  const targetCount = items.reduce((acc, item) => acc + item.target, 0);
  const [count, setCount] = useState(0);
  const getNextCount = (checked: boolean) => {
    setCount(count + (checked ? 1 : -1));
    fx.click.play();
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  function getNextItems() {
    const noOfItems = Math.floor(Math.random() * 2) + 1;
    const items = [];
    for (let i = 0; i < noOfItems; i++) {
      items.push({
        target: Math.floor(Math.random() * 2) + 2,
        text: COUNTABLES[Math.floor(Math.random() * COUNTABLES.length)],
      });
    }
    return items;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function reset() {
    setItems(getNextItems());
    setCount(0);
    setGameId(gameId + 1);
    fx.correct.play();
  }

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        reset();
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [reset]);

  useEffect(() => {
    fx.game.play();
  }, []);
  useEffect(() => {
    speak(`Can you count to ${targetCount}?`);
  }, [gameId, targetCount]);
  useEffect(() => {
    if (count === targetCount) {
      setTimeout(() => {
        speak("Well done! Let's do it again.");
      }, 500);
    }
  }, [count, targetCount]);

  return (
    <Container
      key={gameId}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <Header title="Tap to Count" onRestart={reset}></Header>
      <div className="flex flex-col space-y-8 items-center justify-center h-[90%]">
        <h1
          className={classNames("font-bold py-8", {
            "text-4xl": count === 0,
            "text-8xl": count > 0,
          })}
        >
          {count ? count : ""}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {items.map((item) =>
            Array(item.target)
              .fill("")
              .map((_, index) => (
                <Countable key={index} value={item.text} onClick={getNextCount} isComplete={count === targetCount} />
              ))
          )}
        </div>
        <div className="pt-4">
          <Next onNext={reset} className={{
            invisible: count !== targetCount
          }} />
        </div>
      </div>
    </Container>
  );
};

export default TapToCount;

function Countable({
  value,
  className,
  onClick,
  isComplete
}: {
  value: string;
  className?: string;
  onClick: (checked: boolean) => void;
  isComplete: boolean;
}) {
  const [checked, setChecked] = useState(false);
  const onTap = () => {
    if (!checked) {
      onClick(true);
    }
    setChecked(true);
  };
  return (
    <button
      {...onTouch(onTap)}
      className={classNames(
        "w-24 h-24 lg:w-32 lg:h-32 border-2 border-black rounded",
        "flex items-center justify-center text-5xl lg:text-9xl font-bold",
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
