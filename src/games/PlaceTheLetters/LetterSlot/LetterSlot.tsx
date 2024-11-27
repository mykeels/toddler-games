import clsx from "clsx";
import "./LetterSlot.css";
import { DEFAULT_LETTER_FONT_SIZE } from "../PlaceTheLetters.consts";

type LetterSlotProps = {
  value: string;
  fontSize?: string;
};

export const LetterSlot = ({
  value,
  fontSize = DEFAULT_LETTER_FONT_SIZE
}: LetterSlotProps) => {
  return <span className={clsx(
    `text-white px-4 font-bold stroke-black`,
  )} style={{ fontSize }}>{value}</span>;
};

export default LetterSlot;