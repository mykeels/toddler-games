import { useEffect, useState } from "react";
import classNames from "clsx";
import { FRUITS, ANIMALS, DIGITS } from "@/utils/characters";
import { onTouch } from "@/utils/touch";
import { useHorizontalSwipe } from "@/utils/swipe";
import Container from "@/Container";
import Header from "@/Header/Header";
import { useSpeak } from "@/utils/speak";
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";
import README from "./README.md";
import { useRestart } from "@/utils/restart";
import { useMountTime } from "@/hooks/useMountTime";
import { useCardOptions } from "@/Card/CardOptions";
import { sleep } from "@/utils/sleep";
const COUNTABLES = [...FRUITS, ...ANIMALS];

type TapToCountProps = {
  onNext?: () => void;
  level?: number;
};

export const TapToCount = ({ onNext, ...props }: TapToCountProps) => {
  const { speak } = useSpeak();
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
    onSwipe: () => onNextClick(),
  });
  const targetCount = items.reduce((acc, item) => acc + item.target, 0);
  const [count, setCount] = useState(0);
  const getNextCount = (checked: boolean) => {
    const nextCount = count + (checked ? 1 : -1);
    setCount(nextCount);
    speak(nextCount.toString(), { rate: 1.2 });
  };
  const isComplete = count === targetCount;
  function getNextItems(level: number) {
    const items = [];
    const noOfItems = Math.max(
      Math.floor(Math.random() * (level * 2)) + 2,
      level
    );
    const countable = COUNTABLES[Math.floor(Math.random() * COUNTABLES.length)].value;
    for (let i = 0; i < noOfItems; i++) {
      items.push({
        target: 1,
        text: countable,
      });
    }
    return items;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onNextClick() {
    setItems(getNextItems(noOfItemsToCount));
    setCount(0);
    restart();
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
      const digits = DIGITS.map((number) => number.value.toString());
      if (event.key === "Enter") {
        onNextClick();
      } else if (event.key === " ") {
        const button = document.querySelector(`[data-countable="true"]`);
        if (button) {
          button.tap();
        }
      } else if (digits.includes(event.key)) {
        const button = document.querySelector(`[data-value="${event.key}"]`);
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

  const speakGoal = () => {
    speak(`Can you count to ${targetCount}?`);
  };
  useEffect(speakGoal, [life, targetCount]);
  useEffect(() => {
    if (isComplete) {
      showConfetti();
      setTimeout(() => {
        speak(`How many cards?`);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, targetCount]);

  const { CardOptions } = useCardOptions({
    characters: DIGITS,
    noOfOptions: 2,
    goal: {
      name: targetCount.toString(),
      value: targetCount.toString(),
    },
  });

  return (
    <Container key={life} ref={ref as React.LegacyRef<HTMLDivElement>}>
      <Header
        title="Tap to Count"
        onRestart={onNextClick}
        Right={<Header.Info description={README} />}
      >
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          Tap to Count
        </button>
      </Header>
      <div className="flex flex-col portrait:gap-8 landscape:gap-4 landscape:hsx:gap-1 items-center justify-center h-[90%]">
        <h1 className={classNames("font-bold text-6xl landscape:hsx:text-4xl")}>
          {isComplete ? Confetti : count ? count : ""}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item) =>
            Array(item.target)
              .fill("")
              .map((_, index) => (
                <Countable
                  key={index}
                  value={item.text}
                  onClick={getNextCount}
                  isComplete={isComplete}
                />
              ))
          )}
        </div>
        <div className="pt-4">
          {isComplete && (
            <CardOptions
              onSelect={() => {}}
              onSuccess={async () => {
                await sleep(500);
                speak(`${targetCount} cards!`);
                await sleep(1750);
                onNextClick();
              }}
            />
          )}
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
  isComplete,
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
