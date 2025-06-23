import { FindAndTap } from '@/games/FindAndTap';
import { ImageToLetterMatching } from '@/games/ImageToLetterMatching';
import { PlaceTheLetters } from '@/games/PlaceTheLetters';
import { ReadWords } from '@/games/ReadWords';
import { TapToCount } from '@/games/TapToCount';
import { useRestart } from '@/utils/restart';
import WhatDoYouHear from '../WhatDoYouHear';
import { useMemo } from 'react';
import { getNextCharacter } from '@/utils/characters';

type GameProps = {
  onNext?: () => void;
};
type GameComponent = (props: GameProps) => React.ReactNode;

const games: GameComponent[] = [
  (props: GameProps) => <PlaceTheLetters {...props} />,
  (props: GameProps) => <FindAndTap getCharacterSet={(set) => set.uppercaseLetters} {...props} />,
  (props: GameProps) => <ReadWords {...props} />,
  (props: GameProps) => <WhatDoYouHear {...props} />,
  (props: GameProps) => <FindAndTap getCharacterSet={(set) => set.lowercaseLetters} {...props} />,
  (props: GameProps) => <TapToCount {...props} />,
  (props: GameProps) => <FindAndTap getCharacterSet={(set) => set.digits} {...props} />,
  (props: GameProps) => <ImageToLetterMatching transformLetter={(letter) => letter.toUpperCase()} {...props} />,
  (props: GameProps) => <WhatDoYouHear {...props} uppercase />,
  (props: GameProps) => <FindAndTap getCharacterSet={(set) => set.fruits} {...props} />,
  (props: GameProps) => <ImageToLetterMatching transformLetter={(letter) => letter.toLowerCase()} {...props} />,
  (props: GameProps) => <FindAndTap getCharacterSet={(set) => set.animals} {...props} />,
];

export const Flow = () => {
  const { life, restart } = useRestart();
  const Game = useMemo(() => getNextCharacter(games), [life]);
  return (
    <>
      <Game onNext={restart} />
    </>
  );
};

export default Flow;
