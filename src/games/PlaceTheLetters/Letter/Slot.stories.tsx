import { LetterSlot } from "./Slot";

export default {
  title: "Games/PlaceTheLetters/Letter/Slot",
  component: LetterSlot,
};

export const A = () => <LetterSlot value="A" />;

export const B = () => <LetterSlot value="B" />;

export const C = () => <LetterSlot value="C" />;
export const Word = () => (
  <div className="flex flex-row">
    <LetterSlot value="A" />
    <LetterSlot value="P" />
    <LetterSlot value="P" />
    <LetterSlot value="L" />
    <LetterSlot value="E" />
  </div>
);
