import FindAndTap from "./FindAndTap";
import { CHARACTERS } from "./FindAndTap.const";

type GameType =
  | "uppercase"
  | "lowercase"
  | "numbers"
  | "animals"
  | "fruits";

function FindAndTapGame({
  gameType = "uppercase",
}: {
  gameType?: GameType;
}) {
  const getCharacterSet = () =>
    ({
      "uppercase": CHARACTERS.uppercaseLetters,
      "lowercase": CHARACTERS.lowercaseLetters,
      numbers: CHARACTERS.numbers,
      animals: CHARACTERS.animals,
      fruits: CHARACTERS.fruits,
    }[gameType]);

  return <FindAndTap getCharacterSet={getCharacterSet} />;
}

export default FindAndTapGame;
