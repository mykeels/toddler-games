import { useSpeak } from '@/utils/speak';
import '../index.css';
import { fx } from '@/utils/sound';
import { getBaseUrl } from '@/utils/url';
import { vibrate } from '@/utils/vibrate';
import { SPECIAL_PHONICS } from '@/utils/words';

export const Alphabet = () => {
  const letters = Object.keys(fx.alphabet).filter((l) => !['play'].includes(l));
  const { speak } = useSpeak();
  return (
    <table className="w-full table-fixed border-collapse border border-gray-300">
      <thead className="bg-brand-primary text-white">
        <tr>
          <th className="w-1/2 py-2">Phonics</th>
          <th className="w-1/2 py-2">Alphabet</th>
        </tr>
      </thead>
      <tbody className="bg-white text-xl text-brand-accent-pink">
        {letters.map((letter) => (
          <tr key={letter} className="border-b border-gray-300">
            <td className="p-2">
              <div className="flex flex-row gap-4 items-center justify-center">
                <div className="flex w-10">{letter.toLowerCase()}</div>
                <PlayButton
                  onClick={() => {
                    speak(letter);
                  }}
                />
              </div>
            </td>
            <td className="p-2">
              <div className="flex flex-row gap-4 items-center justify-center">
                <div className="flex w-10">{letter.toUpperCase()}</div>
                <PlayButton
                  onClick={() => {
                    speak(letter);
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ClassicPhonics = () => {
  const phonics = Object.keys(fx.phonics)
    .filter((l) => Object.keys(fx.alphabet).includes(l))
    .filter((l) => !['play'].includes(l));

  return <Letters letters={phonics} />;
};

const SpecialPhonics = () => {
  const phonics = Object.keys(SPECIAL_PHONICS);

  return <Letters letters={phonics} />;
};

const SpecialPhonicVowels = () => {
  const phonics = ['ā', 'ē', 'ī', 'ō', 'ū'];

  return <Letters letters={phonics} />;
};

const SpecialPhonicConsonants = () => {
  const phonics = ['č', 'š'];

  return <Letters letters={phonics} />;
};

const Letters = ({ letters }: { letters: string[] }) => {
  const { speak } = useSpeak();
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-white text-xl text-brand-accent-pink">
      {letters.map((letter) => (
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="flex w-10">{letter.toLowerCase()}</div>
          <PlayButton
            onClick={() => {
              speak(letter);
            }}
          />
        </div>
      ))}
    </div>
  );
};

Alphabet.ClassicPhonics = ClassicPhonics;
Alphabet.SpecialPhonics = SpecialPhonics;
Alphabet.SpecialPhonicVowels = SpecialPhonicVowels;
Alphabet.SpecialPhonicConsonants = SpecialPhonicConsonants;

const PlayButton = ({ onClick }: { onClick: () => void }) => {
  const baseUrl = getBaseUrl();
  return (
    <button
      className="bg-brand-primary text-white px-2 py-1 rounded-md hover:animate-breathe"
      onClick={(e) => {
        onClick();
        vibrate();
        e.currentTarget?.classList?.remove('hover:animate-breathe');
        e.currentTarget?.classList?.add('animate-vibrate');
        setTimeout(() => {
          e.currentTarget?.classList?.remove('animate-vibrate');
          e.currentTarget?.classList?.add('hover:animate-breathe');
        }, 1000);
      }}
    >
      <img src={`${baseUrl}/icons/play-white.svg`} alt="Play" />
    </button>
  );
};
