import { Howl } from "howler";
import { speak } from "./speak";

export const audio = (src: string, options: { rate?: number } = {}) =>
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

export const fx = {
  click: audio("./soundfx/click.mp3"),
  correct: audio("./soundfx/correct.mp3"),
  incorrect: audio("./soundfx/incorrect.mp3"),
  home: audio("./soundfx/home.mp3"),
  game: audio("./soundfx/game.mp3"),
  tapOn: audio("./soundfx/tap-on.mp3"),
  phonics: {
    play: (letter: string, options: { rate?: number } = {}) => {
      if (["ī", "ō"].includes(letter)) {
        audio("./soundfx/alphabet/" + letter.toLowerCase() + ".mp3", options).play();
      } else {
        audio("./soundfx/phonics/" + letter.toLowerCase() + ".mp3", options).play();
      }
    },
    a: audio("./soundfx/phonics/a.mp3"),
    "ā": audio("./soundfx/alphabet/a.mp3"),
    b: audio("./soundfx/phonics/b.mp3"),
    c: audio("./soundfx/phonics/c.mp3"),
    d: audio("./soundfx/phonics/d.mp3"),
    e: audio("./soundfx/phonics/e.mp3"),
    f: audio("./soundfx/phonics/f.mp3"),
    g: audio("./soundfx/phonics/g.mp3"),
    h: audio("./soundfx/phonics/h.mp3"),
    i: audio("./soundfx/phonics/i.mp3"),
    "ī": audio("./soundfx/alphabet/i.mp3"),
    j: audio("./soundfx/phonics/j.mp3"),
    k: audio("./soundfx/phonics/k.mp3"),
    l: audio("./soundfx/phonics/l.mp3"),
    m: audio("./soundfx/phonics/m.mp3"),
    n: audio("./soundfx/phonics/n.mp3"),
    o: audio("./soundfx/phonics/o.mp3"),
    "ō": audio("./soundfx/alphabet/o.mp3"),
    p: audio("./soundfx/phonics/p.mp3"),
    q: audio("./soundfx/phonics/q.mp3"),
    r: audio("./soundfx/phonics/r.mp3"),
    s: audio("./soundfx/phonics/s.mp3"),
    t: audio("./soundfx/phonics/t.mp3"),
    u: audio("./soundfx/phonics/u.mp3"),
    v: audio("./soundfx/phonics/v.mp3"),
    w: audio("./soundfx/phonics/w.mp3"),
    x: audio("./soundfx/phonics/x.mp3"),
    y: audio("./soundfx/phonics/y.mp3"),
    z: audio("./soundfx/phonics/z.mp3"),
  },
  alphabet: {
    a: audio("./soundfx/alphabet/a.mp3"),
    b: audio("./soundfx/alphabet/b.mp3"),
    c: audio("./soundfx/alphabet/c.mp3"),
    d: audio("./soundfx/alphabet/d.mp3"),
    e: audio("./soundfx/alphabet/e.mp3"),
    f: audio("./soundfx/alphabet/f.mp3"),
    g: audio("./soundfx/alphabet/g.mp3"),
    h: audio("./soundfx/alphabet/h.mp3"),
    i: audio("./soundfx/alphabet/i.mp3"),
    j: audio("./soundfx/alphabet/j.mp3"),
    k: audio("./soundfx/alphabet/k.mp3"),
    l: audio("./soundfx/alphabet/l.mp3"),
    m: audio("./soundfx/alphabet/m.mp3"),
    n: audio("./soundfx/alphabet/n.mp3"),
    o: audio("./soundfx/alphabet/o.mp3"),
    p: audio("./soundfx/alphabet/p.mp3"),
    q: audio("./soundfx/alphabet/q.mp3"),
    r: audio("./soundfx/alphabet/r.mp3"),
    s: audio("./soundfx/alphabet/s.mp3"),
    t: audio("./soundfx/alphabet/t.mp3"),
    u: audio("./soundfx/alphabet/u.mp3"),
    v: audio("./soundfx/alphabet/v.mp3"),
    w: audio("./soundfx/alphabet/w.mp3"),
    x: audio("./soundfx/alphabet/x.mp3"),
    y: audio("./soundfx/alphabet/y.mp3"),
    z: audio("./soundfx/alphabet/z.mp3"),
  },
  keys: {
    play: (key: string, options: { rate?: number } = {}) => {
      if (Object.keys(fx.alphabet).includes(key.toLowerCase()) && key === key.toUpperCase()) {
        audio("./soundfx/alphabet/" + key.toLowerCase() + ".mp3", options).play();
      } else if (Object.keys(fx.phonics).includes(key.toLowerCase())) {
        audio("./soundfx/phonics/" + key.toLowerCase() + ".mp3", options).play();
      } else {
        speak(key);
      }
    },
  }
};

export const isVowel = (character: string) =>
  ["a", "e", "i", "o", "u", "ī", "ō"].includes(character);

export type Phonics = Exclude<keyof typeof fx.phonics, "play">;
