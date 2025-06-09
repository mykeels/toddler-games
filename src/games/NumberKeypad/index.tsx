import { useEffect, useState } from "react";
import classNames from "clsx";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import { speak } from "@/utils/speak";
import README from "./README.md";

export const NumberKeypad = () => {
  const [recipient, setRecipient] = useState<string>("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dial = (digit: string) => {
    fx.keys.play(digit, { rate: 1.2 });
    setRecipient((recipient + digit).slice(-10));
    vibrate();
  };
  const reset = () => setRecipient("");

  useEffect(() => {
    fx.game.play();
  }, []);

  useEffect(() => {
    speak(`Dial a number.`);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      if (digits.includes(event.key)) {
        const button = document.querySelector(`[data-digit="${event.key}"]`);
        if (button) {
          (button as HTMLButtonElement).click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [dial]);

  return (
    <Container>
      <Header 
        onRestart={reset}
        noLevels
        Right={
          <Header.Info description={README} />
        }
      >
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
      data-digit={value}
      onClick={() => {
        onClick(value);
        vibrate();
        setClicked(true);
        setTimeout(() => setClicked(false), 700);
      }}
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
