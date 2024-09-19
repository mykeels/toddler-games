import { useState } from "react";
import classNames from "clsx";
import { FRUITS } from "../FindAndTap/FindAndTap.const";

const TapToCount = () => {
  const [gameId, setGameId] = useState(0);
  const [items, setItems] = useState<
    {
      target: number;
      text: string;
    }[]
  >(getNextItems());
  const targetCount = items.reduce((acc, item) => acc + item.target, 0);
  const [count, setCount] = useState(0);
  const getNextCount = (checked: boolean) => {
    setCount(count + (checked ? 1 : -1));
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  function getNextItems() {
    const noOfItems = Math.floor(Math.random() * 2) + 1;
    const items = [];
    for (let i = 0; i < noOfItems; i++) {
      items.push({
        target: Math.floor(Math.random() * 3) + 1,
        text: FRUITS[Math.floor(Math.random() * FRUITS.length)],
      });
    }
    return items;
  }
  function reset() {
    setItems(getNextItems());
    setCount(0);
    setGameId(gameId + 1);
  }

  return (
    <div
      className="flex flex-col space-y-4 items-center justify-center h-full"
      key={gameId}
    >
      <h1
        className={classNames("font-bold py-8", {
          "text-4xl": count === 0,
          "text-8xl": count > 0,
        })}
      >
        {count ? count : "Tap to Count"}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {items.map((item) =>
          Array(item.target)
            .fill("")
            .map((_, index) => (
              <Box key={index} value={item.text} onClick={getNextCount} />
            ))
        )}
      </div>
      {count === targetCount && (
        <button
          className="border-4 border-gray-800 px-8 py-2 text-4xl rounded-md"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default TapToCount;

function Box({
  value,
  onClick,
}: {
  value: string;
  onClick: (checked: boolean) => void;
}) {
  const [checked, setChecked] = useState(false);
  const onTap = () => {
    setChecked(!checked);
    onClick(!checked);
  };
  return (
    <button
      onMouseDown={() => onTap()}
      onTouchStart={() => onTap()}
      className={classNames(
        "w-24 h-24 lg:w-48 lg:h-48 border-8 border-gray-800 flex items-center justify-center text-5xl lg:text-9xl font-bold",
        {
          "bg-yellow-300 animate-breathe": checked,
        }
      )}
    >
      {value}
    </button>
  );
}
