import { Howl } from "howler";

const mp3 = (src: string) =>
  new Howl({
    src: [src],
    preload: true,
    volume: 0.8,
  });

export const fx = {
  click: mp3("./soundfx/click.mp3"),
  correct: mp3("./soundfx/correct.mp3"),
  incorrect: mp3("./soundfx/incorrect.mp3"),
  home: mp3("./soundfx/home.mp3"),
  game: mp3("./soundfx/game.mp3"),
};
