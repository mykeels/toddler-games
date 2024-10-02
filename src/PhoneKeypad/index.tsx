import { useEffect, useState } from "react";
import classNames from "clsx";
import { onTouch } from "../utils/touch";
import { fx } from "../utils/sound";

export const PhoneKeypad = () => {
  const [recipient, setRecipient] = useState<string>("");
  const dial = (digit: string) => {
    const sound = {
      0: fx.digits.zero,
      1: fx.digits.one,
      2: fx.digits.two,
      3: fx.digits.three,
      4: fx.digits.four,
      5: fx.digits.five,
      6: fx.digits.six,
      7: fx.digits.seven,
      8: fx.digits.eight,
      9: fx.digits.nine,
    }[digit];
    sound?.play();
    setRecipient((recipient + digit).slice(-10));
  };

  useEffect(() => {
    fx.game.play();
  }, []);

  return (
    <div className="h-full select-none">
      <h1 className="text-4xl text-gray-800">{recipient || "#"}</h1>
      <div className="flex flex-col space-y-4 py-8">
        <div className="flex justify-center space-x-4">
          <DigitButton value="1" onClick={() => dial("1")} />
          <DigitButton value="2" onClick={() => dial("2")} />
          <DigitButton value="3" onClick={() => dial("3")} />
        </div>
        <div className="flex justify-center space-x-4">
          <DigitButton value="4" onClick={() => dial("4")} />
          <DigitButton value="5" onClick={() => dial("5")} />
          <DigitButton value="6" onClick={() => dial("6")} />
        </div>
        <div className="flex justify-center space-x-4">
          <DigitButton value="7" onClick={() => dial("7")} />
          <DigitButton value="8" onClick={() => dial("8")} />
          <DigitButton value="9" onClick={() => dial("9")} />
        </div>
        <div className="flex justify-center space-x-4">
          <DigitButton value="0" onClick={() => dial("0")} />
        </div>
      </div>
    </div>
  );
};

export default PhoneKeypad;

function DigitButton({
  value,
  onClick,
}: {
  value: string;
  onClick: (value: string) => void;
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      {...onTouch(() => {
        onClick(value);
        if ("vibrate" in navigator) {
          navigator.vibrate(200);
        }
        setClicked(true);
        setTimeout(() => setClicked(false), 700);
      })}
      className={classNames(
        "w-28 h-28 border-8 border-gray-800 flex items-center justify-center text-3xl font-bold",
        clicked && "bg-yellow-200 text-gray-800 animate-breathe"
      )}
    >
      {value}
    </button>
  );
}
