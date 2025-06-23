import { useParams } from 'react-router';
import { ImageToLetterMatching } from '.';

export const ImageToLetterMatchingRoute = () => {
  const { characterSet } = useParams();
  const transformLetter =
    {
      uppercase: (letter: string) => letter.toUpperCase(),
      lowercase: (letter: string) => letter.toLowerCase(),
    }[characterSet as never] || ((letter: string) => letter);

  return <ImageToLetterMatching transformLetter={transformLetter} />;
};
