import clsx from "clsx";
import "./LetterSlot.css";

type LetterSlotProps = {
  value: string;
  fontSize?: string;
};

export const LetterSlot = ({ value, fontSize = "text-9xl" }: LetterSlotProps) => {
  return <span className={clsx(
    `text-white px-4 font-bold stroke-black`,
    fontSize
  )}>{value}</span>;
};

export default LetterSlot;