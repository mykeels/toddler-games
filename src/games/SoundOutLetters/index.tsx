/**
 * In this activity, we will ask, "What sound does [letter] make?"
 * where [letter] is a letter of the alphabet.
 *
 * The player will be shown a card with the letter
 * When the card is clicked, the sound of the letter will be played
 * The card is marked as correct
 * The player can click a Next button to get a new random letter
 */

import { useState } from 'react';
import Card from '@/Card';
import { LETTERS } from '@/utils/characters';
import { fx } from '@/utils/sound';
import { speak } from '@/utils/speak';
import { useRestart } from '@/utils/restart';
import Container from '@/Container';
import Header from '@/Header/Header';
import Next from '@/Next';

function getRandomLetter() {
  const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  speak(`What sound does ${letter.value} make?`);
  return letter;
}

export default function SoundOutLetters() {
  const { life, restart } = useRestart();
  const [current, setCurrent] = useState(() => getRandomLetter());
  const [correct, setCorrect] = useState<boolean | null>(null);

  const handleCardClick = () => {
    fx.phonics.play(current.value);
    setCorrect(true);
  };

  const handleNext = () => {
    restart();
    setCurrent(getRandomLetter());
    setCorrect(null);
  };

  return (
    <Container key={`${life}-${current.value}`}>
      <Header onRestart={handleNext} Right={null} noLevels>
        <button
          className="focus:outline-none"
          onClick={() => {
            speak(`What sound does ${current.value} make?`);
          }}
        >
          What sound does {current.value} make?
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
        <Card
          name="sound-out-letter"
          value={current.value}
          selectedValue={correct === null ? null : correct ? current.value : null}
          onClick={handleCardClick}
          className="w-32 h-32 text-6xl"
        >
          {current.value}
        </Card>
        {!!correct && <Next onNext={handleNext} />}
      </div>
    </Container>
  );
}
