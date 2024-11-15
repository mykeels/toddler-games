import { Howl } from "howler";

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
    ten: audio("./soundfx/digits/Ten.wav", { rate: digitRate }),
  },
  tapOn: audio("./soundfx/tap-on.mp3"),
  phonics: {
    a: audio("./soundfx/phonics/a.wav"),
    b: audio("./soundfx/phonics/b.wav"),
    c: audio("./soundfx/phonics/c.wav"),
    d: audio("./soundfx/phonics/d.wav"),
    e: audio("./soundfx/phonics/e.wav"),
    f: audio("./soundfx/phonics/f.wav"),
    g: audio("./soundfx/phonics/g.wav"),
    h: audio("./soundfx/phonics/h.wav"),
    i: audio("./soundfx/phonics/i.wav"),
    j: audio("./soundfx/phonics/j.wav"),
    k: audio("./soundfx/phonics/k.wav"),
    l: audio("./soundfx/phonics/l.wav"),
    m: audio("./soundfx/phonics/m.wav"),
    n: audio("./soundfx/phonics/n.wav"),
    o: audio("./soundfx/phonics/o.wav"),
    "ō": audio("./soundfx/alphabet/O.wav"),
    p: audio("./soundfx/phonics/p.wav"),
    q: audio("./soundfx/phonics/q.wav"),
    r: audio("./soundfx/phonics/r.wav"),
    s: audio("./soundfx/phonics/s.wav"),
    t: audio("./soundfx/phonics/t.wav"),
    u: audio("./soundfx/phonics/u.wav"),
    v: audio("./soundfx/phonics/v.wav"),
    w: audio("./soundfx/phonics/w.wav"),
    x: audio("./soundfx/phonics/x.wav"),
    y: audio("./soundfx/phonics/y.wav"),
    z: audio("./soundfx/phonics/z.wav"),
  },
};
