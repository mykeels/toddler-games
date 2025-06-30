import { useParams } from 'react-router';
import { LetterToImageMatching } from '.';

export const LetterToImageMatchingRoute = () => {
  const { characterSet } = useParams();
  const transformLetter =
    {
      uppercase: (letter: string) => letter.toUpperCase(),
      lowercase: (letter: string) => letter.toLowerCase(),
    }[characterSet as never] || ((letter: string) => letter);

  return <LetterToImageMatching transformLetter={transformLetter} />;
};
