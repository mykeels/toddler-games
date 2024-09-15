import FindAndTap from "./FindAndTap";
import { CHARACTERS } from "./FindAndTap.const";

type GameType =
  | "uppercase-letters"
  | "lowercase-letters"
  | "numbers"
  | "animals"
  | "fruits";

function FindAndTapGame({
  gameType = "uppercase-letters",
}: {
  gameType?: GameType;
}) {
  const getCharacterSet = () =>
    ({
      "uppercase-letters": CHARACTERS.uppercaseLetters,
      "lowercase-letters": CHARACTERS.lowercaseLetters,
      numbers: CHARACTERS.numbers,
      animals: CHARACTERS.animals,
      fruits: CHARACTERS.fruits,
    }[gameType]);

  return <FindAndTap getCharacterSet={getCharacterSet} />;
}

export default FindAndTapGame;
