import { useEffect, useState } from "react";
import classNames from "clsx";
import { onTouch } from "@/utils/touch";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";

export const NumberKeypad = () => {
  const [recipient, setRecipient] = useState<string>("");
  const dial = (digit: string) => {
    speak(digit);
    setRecipient((recipient + digit).slice(-10));
  };
  const reset = () => setRecipient("");

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Dial a number.`);
  }, []);

  return (
    <Container>
      <Header onRestart={reset}>
        {recipient || "#"}
      </Header>
      <div className="flex flex-wrap justify-center content-center items-center gap-4 landscape:px-[10%] h-[90%]">
        <DigitButton value="0" onClick={() => dial("0")} />
        <DigitButton value="1" onClick={() => dial("1")} />
        <DigitButton value="2" onClick={() => dial("2")} />
        <DigitButton value="3" onClick={() => dial("3")} />
        <DigitButton value="4" onClick={() => dial("4")} />
        <DigitButton value="5" onClick={() => dial("5")} />
        <DigitButton value="6" onClick={() => dial("6")} />
        <DigitButton value="7" onClick={() => dial("7")} />
        <DigitButton value="8" onClick={() => dial("8")} />
        <DigitButton value="9" onClick={() => dial("9")} />
        <DigitButton value="10" onClick={() => dial("10")} />
      </div>
    </Container>
  );
};

export default NumberKeypad;

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
        vibrate();
        setClicked(true);
        setTimeout(() => setClicked(false), 700);
      })}
      className={classNames(
        "w-24 h-24 lg:w-32 lg:h-32 border-2 border-black flex items-center justify-center text-3xl text-black font-bold rounded",
        {
          "bg-white": !clicked,
          "bg-brand-accent-yellow text-black animate-breathe": clicked
        }
      )}
    >
      {value}
    </button>
  );
}
