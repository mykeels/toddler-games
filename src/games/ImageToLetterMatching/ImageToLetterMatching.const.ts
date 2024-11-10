export const IMAGES = [
  {
    image: "🐶",
    word: "Dog",
  },
  {
    image: "🐱",
    word: "Cat",
  },
  {
    image: "🐭",
    word: "Mouse",
  },
  {
    image: "🐹",
    word: "Hamster",
  },
  {
    image: "🐠",
    word: "Fish",
  },
  {
    image: "🥚",
    word: "Egg",
  },
  {
    image: "🐔",
    word: "Chicken",
  },
  {
    image: "😊",
    word: "Happy",
  },
  {
    image: "😭",
    word: "Sad",
  },
  {
    image: "😠",
    word: "Angry",
  },
  {
    image: "🐢",
    word: "Turtle",
  },
  {
    image: "🍌",
    word: "Banana",
  },
  {
    image: "🍎",
    word: "Apple",
  },
  {
    image: "🍓",
    word: "Strawberry",
  },
  {
    image: "🍉",
    word: "Watermelon",
  },
  {
    image: "🍇",
    word: "Grapes",
  },
  {
    image: "🍒",
    word: "Cherry",
  },
  {
    image: "🍍",
    word: "Pineapple",
  },
  {
    image: "🥥",
    word: "Coconut",
  },
];

let lastImageIndex = 0;
export function getNextImage(): {
  image: string;
  word: string;
} {
  let index = Math.floor(Math.random() * IMAGES.length);
  while (index === lastImageIndex) {
    index = Math.floor(Math.random() * IMAGES.length);
  }
  lastImageIndex = index;
  return IMAGES[index];
}
