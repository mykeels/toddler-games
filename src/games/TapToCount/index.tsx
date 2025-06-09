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
import README from "./README.md";
import { vibrate } from "@/utils/vibrate";
import { useRestart } from "@/utils/restart";
import { useMountTime } from "@/hooks/useMountTime";
const COUNTABLES = [...FRUITS, ...ANIMALS];

type TapToCountProps = {
  onNext?: () => void;
  level?: number;
};

export const TapToCount = ({ onNext, ...props }: TapToCountProps) => {
  const { life, restart } = useRestart();
  const level = useLevel();
  const noOfItemsToCount = (props.level ?? level) + 1;
  const [items, setItems] = useState<
    {
      target: number;
      text: string;
    }[]
  >(getNextItems(noOfItemsToCount));
  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick()
  });
  const targetCount = items.reduce((acc, item) => acc + item.target, 0);
  const [count, setCount] = useState(0);
  const getNextCount = (checked: boolean) => {
    setCount(count + (checked ? 1 : -1));
    fx.click.play();
  };
  function getNextItems(level: number) {
    const items = [];
    const noOfItems = Math.max(Math.floor(Math.random() * (level * 2)) + 2, level);
    for (let i = 0; i < noOfItems; i++) {
      items.push({
        target: 1,
        text: COUNTABLES[Math.floor(Math.random() * COUNTABLES.length)].value,
      });
    }
    return items;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onNextClick() {
    setItems(getNextItems(noOfItemsToCount));
    setCount(0);
    restart();
    fx.correct.play();
    vibrate();
    onNext?.();
  }

  const { elapsedTime } = useMountTime();

  useEffect(() => {
    if (elapsedTime().seconds < 3) {
      return;
    }
    setItems(getNextItems(noOfItemsToCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfItemsToCount]);

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onNextClick();
      } else if (event.key === " ") {
        const button = document.querySelector(`[data-countable="true"]`);
        if (button) {
          button.tap();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick]);

  const [showConfetti, Confetti] = useConfetti();

  useEffect(() => {
    fx.game.play();
  }, []);
  useEffect(() => {
    speak(`Can you count to ${targetCount}?`);
  }, [life, targetCount]);
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
      key={life}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <Header 
        title="Tap to Count" 
        onRestart={restart}
        Right={
          <Header.Info description={README} />
        }
      >
      </Header>
      <div className="flex flex-col portrait:gap-8 landscape:gap-4 landscape:hsx:gap-1 items-center justify-center h-[90%]">
        <h1
          className={classNames("font-bold text-6xl landscape:hsx:text-4xl")}
        >
          {count ? count : ""}
          {Confetti}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item) =>
            Array(item.target)
              .fill("")
              .map((_, index) => (
                <Countable key={index} value={item.text} onClick={getNextCount} isComplete={count === targetCount} />
              ))
          )}
        </div>
        <div className="pt-4">
          <Next onNext={onNextClick} className={{
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
      data-countable={!checked}
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
