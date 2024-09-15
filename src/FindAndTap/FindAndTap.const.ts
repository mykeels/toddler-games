export const UPPERCASE_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export const LOWERCASE_LETTERS = UPPERCASE_LETTERS.map((letter) =>
  letter.toLowerCase()
);

export const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export const ANIMALS = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨"];

export const FRUITS = ["🍎", "🍌", "🍇", "🍈", "🍉", "🍊", "🍋", "🍍", "🍎"];

export const CHARACTERS = {
  uppercaseLetters: UPPERCASE_LETTERS,
  lowercaseLetters: LOWERCASE_LETTERS,
  numbers: NUMBERS,
  animals: ANIMALS,
  fruits: FRUITS,
};
