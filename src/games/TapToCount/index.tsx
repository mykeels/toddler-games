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
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";

const COUNTABLES = [...FRUITS, ...ANIMALS];

const TapToCount = ({ ...props }: { level?: number }) => {
  const [gameId, setGameId] = useState(0);
  const level = useLevel();
  const noOfItemsToCount = (props.level ?? level) + 1;
  const [items, setItems] = useState<
    {
      target: number;
      text: string;
    }[]
  >(getNextItems(noOfItemsToCount));
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
  function getNextItems(level: number) {
    const items = [];
    const noOfItems = Math.floor(Math.random() * (level * 2)) + 2;
    for (let i = 0; i < noOfItems; i++) {
      items.push({
        target: 1,
        text: COUNTABLES[Math.floor(Math.random() * COUNTABLES.length)].value,
      });
    }
    return items;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function reset() {
    setItems(getNextItems(noOfItemsToCount));
    setCount(0);
    setGameId(gameId + 1);
    fx.correct.play();
  }

  useEffect(() => {
    setItems(getNextItems(noOfItemsToCount));
  }, [noOfItemsToCount]);
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

  const [showConfetti, Confetti] = useConfetti();

  useEffect(() => {
    fx.game.play();
  }, []);
  useEffect(() => {
    speak(`Can you count to ${targetCount}?`);
  }, [gameId, targetCount]);
  useEffect(() => {
    if (count === targetCount) {
      showConfetti();
      setTimeout(() => {
        speak("Well done! Let's do it again.");
      }, 500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, targetCount]);

  return (
    <Container
      key={gameId}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <Header title="Tap to Count" onRestart={reset}></Header>
      <div className="flex flex-col portrait:gap-8 landscape:gap-1 items-center justify-center h-[90%]">
        <h1
          className={classNames("font-bold portrait:text-6xl landscape:text-4xl")}
        >
          {count ? count : ""}
          {Confetti}
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
        "portrait:w-[16dvw] portrait:h-[16dvw] landscape:w-[18dvh] landscape:h-[18dvh]",
        "border-2 border-black rounded",
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
