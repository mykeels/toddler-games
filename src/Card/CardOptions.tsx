import { Character, getOptions, shuffle } from '@/utils/characters';
import { useEffect, useState } from 'react';
import Card from '.';
import { useConfetti } from '@/Confetti';
import { vibrate } from '@/utils/vibrate';
import { fx } from '@/utils/sound';

export const useCardOptions = ({
  characters,
  noOfOptions,
  goal,
}: {
  goal: Character;
  characters: Character[];
  noOfOptions: number;
}) => {
  const getNextPair = () => {
    const options = getOptions(characters, noOfOptions);
    const filteredOptions = options.filter((option) => option.value !== goal.value);
    return shuffle([
      goal,
      ...filteredOptions.slice(0, filteredOptions.length === options.length ? options.length - 1 : options.length),
    ]);
  };
  const [pair, setPair] = useState<Character[]>(getNextPair());

  useEffect(() => {
    setPair(getNextPair());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ignore getNextPair dependency
  }, [goal.value, noOfOptions]);

  const _CardOptions = ({
    onSelect,
    onSuccess,
  }: {
    onSelect: (character: Character) => void;
    onSuccess: () => void;
  }) => (
    <CardOptions
      pair={pair}
      goal={goal}
      onSelect={onSelect}
      onSuccess={() => {
        onSuccess();
      }}
    />
  );

  return {
    pair,
    setPair,
    CardOptions: _CardOptions,
  };
};

type PairOptionCardsProps = {
  pair: Character[];
  goal: Character;
  onSelect: (character: Character) => void;
  onSuccess: () => void;
};

export const CardOptions = ({ pair, goal, onSelect, onSuccess }: PairOptionCardsProps) => {
  const [showConfetti, Confetti] = useConfetti();
  return (
    <div data-name="pair" className="flex justify-center flex-wrap gap-4">
      {pair.map((character) => (
        <Card
          key={character.value}
          value={character.value}
          selectedValue={goal.value}
          onClick={() => {
            onSelect(character);
            if (character.value === goal.value) {
              showConfetti();
              fx.correct.play();
              vibrate();
              onSuccess?.();
            } else {
              vibrate();
              fx.incorrect.play();
            }
          }}
          name="pair"
          className="rounded-full"
        >
          {character.value}
          {character.value === goal.value ? Confetti : null}
        </Card>
      ))}
    </div>
  );
};
