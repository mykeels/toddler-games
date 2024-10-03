import { Howl } from "howler";
import { LOWERCASE_LETTERS, NUMBERS, NUMBERS_TO_WORDS } from "@/utils/characters";

const audio = (src: string, options: { rate?: number } = {}) =>
  new Howl({
    ...options,
    src: [src],
    preload: true,
    volume: 0.8,
  });

export const sequence = (
  fileNames: string[],
  options: { rate?: number; call?: number } = {}
) => {
  const audio = new Howl({
    src: [fileNames[0]],
    preload: true,
    onend: function () {
      fileNames.shift();
      if (fileNames.length > 0) {
        sequence(fileNames, { ...options, call: (options?.call ?? 0) + 1 });
      }
    },
  });
  if (options?.call) {
    audio.play();
  }
  return audio;
};

const digitRate = 1.2;

export const fx = {
  click: audio("./soundfx/click.mp3"),
  correct: audio("./soundfx/correct.mp3"),
  incorrect: audio("./soundfx/incorrect.mp3"),
  home: audio("./soundfx/home.mp3"),
  game: audio("./soundfx/game.mp3"),
  digits: {
    one: audio("./soundfx/digits/One.wav", { rate: digitRate }),
    two: audio("./soundfx/digits/Two.wav", { rate: digitRate }),
    three: audio("./soundfx/digits/Three.wav", { rate: digitRate }),
    four: audio("./soundfx/digits/Four.wav", { rate: digitRate }),
    five: audio("./soundfx/digits/Five.wav", { rate: digitRate }),
    six: audio("./soundfx/digits/Six.wav", { rate: digitRate }),
    seven: audio("./soundfx/digits/Seven.wav", { rate: digitRate }),
    eight: audio("./soundfx/digits/Eight.wav", { rate: digitRate }),
    nine: audio("./soundfx/digits/Nine.wav", { rate: digitRate }),
    zero: audio("./soundfx/digits/Zero.wav", { rate: digitRate }),
  },
  alphabet: Object.fromEntries(
    LOWERCASE_LETTERS.map((letter) => [
      letter,
      audio(`./soundfx/alphabet/${letter.toUpperCase()}.wav`, {
        rate: digitRate,
      }),
    ])
  ) as Record<keyof typeof LOWERCASE_LETTERS, Howl>,
  tapOn: audio("./soundfx/tap-on.mp3"),
  tapOnAlphabet: Object.fromEntries(
    LOWERCASE_LETTERS.map((letter) => [
      letter,
      sequence([
        "./soundfx/tap-on.mp3",
        `./soundfx/alphabet/${letter.toUpperCase()}.wav`,
      ]),
    ])
  ) as Record<keyof typeof LOWERCASE_LETTERS, Howl>,
  tapOnNumbers: Object.fromEntries(
    Object.entries(NUMBERS_TO_WORDS).map(([number, word]) => [
      number,
      sequence([
        "./soundfx/tap-on.mp3",
        `./soundfx/digits/${word[0].toUpperCase() + word.slice(1)}.wav`,
      ]),
    ])
  ) as Record<keyof typeof NUMBERS, Howl>,
};
