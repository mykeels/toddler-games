import { Howl } from "howler";

const audio = (src: string, options: { rate?: number } = {}) =>
  new Howl({
    ...options,
    src: [src],
    preload: true,
    volume: 0.8,
  });

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
};
