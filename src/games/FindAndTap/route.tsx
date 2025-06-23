import { CHARACTERS } from "@/utils/characters";
import { useParams } from "react-router";
import FindAndTap from ".";

export const FindAndTapRoute = () => {
  const { characterSet, subCharacterSet } = useParams();
  const getCharacterSet =
    {
      uppercase: (set: typeof CHARACTERS) => set.uppercaseLetters,
      lowercase: (set: typeof CHARACTERS) => set.lowercaseLetters,
      numbers: {
        digits: (set: typeof CHARACTERS) => set.digits,
        tens: (set: typeof CHARACTERS) => set.numbersTens,
        hundreds: (set: typeof CHARACTERS) => set.numbersHundreds,
      }[subCharacterSet as never] || ((set: typeof CHARACTERS) => set.digits),
      animals: (set: typeof CHARACTERS) => set.animals,
      fruits: (set: typeof CHARACTERS) => set.fruits,
    }[characterSet as never] ||
    ((set: typeof CHARACTERS) => set.uppercaseLetters);
    
  return <FindAndTap getCharacterSet={getCharacterSet} />;
};
