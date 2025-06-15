import clsx from "clsx";
import "./LetterSlot.css";
import { DEFAULT_LETTER_FONT_SIZE } from "../PlaceTheLetters.consts";
import { RefObject, useRef } from "react";
import { vibrate } from "@/utils/vibrate";
import { fx } from "@/utils/sound";

type LetterSlotProps = {
  value: string;
  fontSize?: string;
  onDrop?: () => void;
  canReceive?: boolean;
};

export const LetterSlot = ({
  value,
  onDrop,
  fontSize = DEFAULT_LETTER_FONT_SIZE,
  canReceive = false,
}: LetterSlotProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const slotAnimations = useAnimateSlot(spanRef);
  return (
    <span
      ref={spanRef}
      data-letter-slot={value}
      className={clsx(
        `inline-block text-white py-2 px-1 font-bold stroke-black letter-slot`,
        {
          "opacity-25": !canReceive,
          "animate-breathe text-white opacity-75": canReceive,
        }
      )}
      style={{ fontSize }}
      {...(canReceive
        ? {
            onDrop: (e) => {
              slotAnimations.onDragLeave();
              const droppedElement = (e.relatedTarget as HTMLElement)?.closest(
                ".draggable-letter"
              );
              if (droppedElement) {
                const letter = e.dataTransfer?.getData("text/plain");
                if (letter === value) {
                  onDrop?.();
                  slotAnimations.onDragSuccess();
                } else {
                  slotAnimations.onDragError();
                }
              }
            },
            onDragOver: (e) => {
              e.preventDefault();
              slotAnimations.onDragOver();
            },
            onDragLeave: () => {
              slotAnimations.onDragLeave();
            },
          }
        : {})}
    >
      {value}
    </span>
  );
};

const useAnimateSlot = (ref: RefObject<HTMLElement>) => {
  return {
    onDragLeave: () => {
      // ref.current?.classList.remove("animate-breathe", "text-white");
      // ref.current?.classList.add("opacity-25");
    },
    onDragOver: () => {
      // ref.current?.classList.add("animate-breathe", "text-white");
      // ref.current?.classList.remove("opacity-25");
    },
    onDragError: () => {
      fx.incorrect.play();
      vibrate();
      ref.current?.classList.add("animate-vibrate");
      setTimeout(() => {
        ref.current?.classList.remove("animate-vibrate");
      }, 1000);
    },
    onDragSuccess: () => {
      const letterSlot = ref.current?.closest("[data-letter-slot]");
      const letterSlotValue = letterSlot?.getAttribute("data-letter-slot");
      if (letterSlotValue) {
        fx.keys.play(letterSlotValue);
      }
      // fx.correct.play();
      ref.current?.classList.add("animate-success");
      setTimeout(() => {
        ref.current?.classList.remove("animate-success");
      }, 1000);
    },
  };
};

export default LetterSlot;
