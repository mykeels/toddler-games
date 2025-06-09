import { CHARACTERS } from "@/utils/characters";
import { useParams } from "react-router";
import FindAndTap from ".";

export const FindAndTapRoute = () => {
  const { characterSet } = useParams();
  const getCharacterSet =
    {
      uppercase: (set: typeof CHARACTERS) => set.uppercaseLetters,
      lowercase: (set: typeof CHARACTERS) => set.lowercaseLetters,
      numbers: (set: typeof CHARACTERS) => set.numbers,
      animals: (set: typeof CHARACTERS) => set.animals,
      fruits: (set: typeof CHARACTERS) => set.fruits,
    }[characterSet as never] ||
    ((set: typeof CHARACTERS) => set.uppercaseLetters);
    
  return <FindAndTap getCharacterSet={getCharacterSet} />;
};
