export type Character = {
  value: string;
  name: string;
};

export const LETTERS: Character[] = [
  {
    value: 'A',
    name: 'A',
  },
  {
    value: 'B',
    name: 'B',
  },
  {
    value: 'C',
    name: 'C',
  },
  {
    value: 'D',
    name: 'D',
  },
  {
    value: 'E',
    name: 'E',
  },
  {
    value: 'F',
    name: 'F',
  },
  {
    value: 'G',
    name: 'G',
  },
  {
    value: 'H',
    name: 'H',
  },
  {
    value: 'I',
    name: 'I',
  },
  {
    value: 'J',
    name: 'J',
  },
  {
    value: 'K',
    name: 'K',
  },
  {
    value: 'L',
    name: 'L',
  },
  {
    value: 'M',
    name: 'M',
  },
  {
    value: 'N',
    name: 'N',
  },
  {
    value: 'O',
    name: 'O',
  },
  {
    value: 'P',
    name: 'P',
  },
  {
    value: 'Q',
    name: 'Q',
  },
  {
    value: 'R',
    name: 'R',
  },
  {
    value: 'S',
    name: 'S',
  },
  {
    value: 'T',
    name: 'T',
  },
  {
    value: 'U',
    name: 'U',
  },
  {
    value: 'V',
    name: 'V',
  },
  {
    value: 'W',
    name: 'W',
  },
  {
    value: 'X',
    name: 'X',
  },
  {
    value: 'Y',
    name: 'Y',
  },
  {
    value: 'Z',
    name: 'Z',
  },
];

export const DIGITS: Character[] = [
  {
    value: '1',
    name: 'one',
  },
  {
    value: '2',
    name: 'two',
  },
  {
    value: '3',
    name: 'three',
  },
  {
    value: '4',
    name: 'four',
  },
  {
    value: '5',
    name: 'five',
  },
  {
    value: '6',
    name: 'six',
  },
  {
    value: '7',
    name: 'seven',
  },
  {
    value: '8',
    name: 'eight',
  },
  {
    value: '9',
    name: 'nine',
  },
  {
    value: '0',
    name: 'zero',
  },
];

export const NUMBERS_TENS: Character[] = [
  ...Array.from({ length: 90 }, (_, i) => ({
    value: (i + 1).toString(),
    name: (i + 1).toString(),
  })),
];

export const NUMBERS_HUNDREDS: Character[] = [
  ...Array.from({ length: 900 }, (_, i) => ({
    value: (i + 1).toString(),
    name: (i + 1).toString(),
  })),
];

export const ANIMALS: Character[] = [
  {
    value: '🐶',
    name: 'Dog',
  },
  {
    value: '🐱',
    name: 'Cat',
  },
  {
    value: '🐭',
    name: 'Mouse',
  },
  {
    value: '🐹',
    name: 'Hamster',
  },
  {
    value: '🐰',
    name: 'Rabbit',
  },
  {
    value: '🦊',
    name: 'Fox',
  },
  {
    value: '🐻',
    name: 'Bear',
  },
  {
    value: '🐼',
    name: 'Panda',
  },
  {
    value: '🐯',
    name: 'Tiger',
  },
  {
    value: '🦁',
    name: 'Lion',
  },
  {
    value: '🐮',
    name: 'Cow',
  },
  {
    value: '🐷',
    name: 'Pig',
  },
  {
    value: '🐸',
    name: 'Frog',
  },
];

export const FRUITS: Character[] = [
  {
    value: '🍌',
    name: 'Banana',
  },
  {
    value: '🍎',
    name: 'Apple',
  },
  {
    value: '🍓',
    name: 'Strawberry',
  },
  {
    value: '🍉',
    name: 'Watermelon',
  },
  {
    value: '🍇',
    name: 'Grapes',
  },
  {
    value: '🍒',
    name: 'Cherry',
  },
  {
    value: '🍍',
    name: 'Pineapple',
  },
  {
    value: '🥥',
    name: 'Coconut',
  },
];

export const CHARACTERS = {
  uppercaseLetters: LETTERS,
  lowercaseLetters: LETTERS.map(
    (letter) =>
      ({
        value: letter.value.toLowerCase(),
        name: letter.name,
      }) as Character
  ),
  digits: DIGITS,
  numbersTens: NUMBERS_TENS,
  numbersHundreds: NUMBERS_HUNDREDS,
  animals: ANIMALS,
  fruits: FRUITS,
};

export function getOptions(set: { value: string; name: string }[], length = 2): { value: string; name: string }[] {
  const options: { value: string; name: string }[] = [];
  for (let i = 0; i < length; i++) {
    let letter = set[Math.floor(Math.random() * set.length)];
    while (options.find((option) => option.value === letter.value)) {
      letter = set[Math.floor(Math.random() * set.length)];
    }
    options.push(letter);
  }
  return options;
}

export function getFirstCharOptions(set: { value: string; name: string }[], word: string, length = 2): string[] {
  const letter1 = word[0];
  const options = [letter1];
  const setValues = set.map((character) => character.value);
  for (let i = 1; i < length; i++) {
    let letter = setValues[Math.floor(Math.random() * setValues.length)];
    while (options.includes(letter)) {
      letter = setValues[Math.floor(Math.random() * setValues.length)];
    }
    options.push(letter);
  }
  return options;
}

let lastCharacterIndex = 0;
export function getNextCharacter<T extends K[], K>(set: T): T[number] {
  let index = Math.floor(Math.random() * set.length);
  while (index === lastCharacterIndex) {
    index = Math.floor(Math.random() * set.length);
  }
  lastCharacterIndex = index;
  return set[index];
}

export function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
