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
};

export const LetterSlot = ({
  value,
  onDrop,
  fontSize = DEFAULT_LETTER_FONT_SIZE
}: LetterSlotProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const slotAnimations = useAnimateSlot(spanRef);
  return <span
    ref={spanRef}
    className={clsx(
      `inline-block text-white px-4 font-bold stroke-black letter-slot`,
    )}
    style={{ fontSize }}
    onDrop={e => {
      slotAnimations.onDragLeave();
      const droppedElement = (e.relatedTarget as HTMLElement)?.closest('.draggable-letter');
      if (droppedElement) {
        const letter = e.dataTransfer?.getData('text/plain');
        if (letter === value) {
          onDrop?.();
          slotAnimations.onDragSuccess();
        } else {
          slotAnimations.onDragError();
        }
      }
    }}
    onDragOver={e => {
      e.preventDefault();
      slotAnimations.onDragOver();
    }}
    onDragLeave={() => {
      slotAnimations.onDragLeave();
    }}
  >{value}</span>;
};

const useAnimateSlot = (ref: RefObject<HTMLElement>) => {
  return {
    onDragLeave: () => {
      ref.current?.classList.remove('animate-breathe', 'text-red-300');
    },
    onDragOver: () => {
      ref.current?.classList.add('animate-breathe', 'text-red-300');
    },
    onDragError: () => {
      fx.incorrect.play();
      vibrate();
      ref.current?.classList.add('animate-vibrate');
      setTimeout(() => {
        ref.current?.classList.remove('animate-vibrate');
      }, 1000);
    },
    onDragSuccess: () => {
      fx.correct.play();
      ref.current?.classList.add('animate-success');
      setTimeout(() => {
        ref.current?.classList.remove('animate-success');
      }, 1000);
    }
  }
};

export default LetterSlot;