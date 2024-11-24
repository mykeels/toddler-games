import { fx } from "@/utils/sound";

/**
 * In pronunciations,
 * The phonics sound "oh" is represented as "ō"
 * The phonics sound "ee" is represented as "ī"
 */

export const PHONICS_LETTERS = [
  {
    value: "a",
    speak: () => fx.phonics.a.play(),
  },
  {
    value: "b",
    speak: () => fx.phonics.b.play(),
  },
  {
    value: "c",
    speak: () => fx.phonics.c.play(),
  },
  {
    value: "d",
    speak: () => fx.phonics.d.play(),
  },
  {
    value: "e",
    speak: () => fx.phonics.e.play(),
  },
  {
    value: "f",
    speak: () => fx.phonics.f.play(),
  },
  {
    value: "g",
    speak: () => fx.phonics.g.play(),
  },
  {
    value: "h",
    speak: () => fx.phonics.h.play(),
  },
  {
    value: "i",
    speak: () => fx.phonics.i.play(),
  },
  {
    value: "ī",
    speak: () => fx.phonics["ī"].play(),
  },
  {
    value: "j",
    speak: () => fx.phonics.j.play(),
  },
  {
    value: "k",
    speak: () => fx.phonics.k.play(),
  },
  {
    value: "l",
    speak: () => fx.phonics.l.play(),
  },
  {
    value: "m",
    speak: () => fx.phonics.m.play(),
  },
  {
    value: "n",
    speak: () => fx.phonics.n.play(),
  },
  {
    value: "o",
    speak: () => fx.phonics.o.play(),
  },
  {
    value: "ō",
    speak: () => fx.phonics["ō"].play(),
  },
  {
    value: "p",
    speak: () => fx.phonics.p.play(),
  },
  {
    value: "q",
    speak: () => fx.phonics.q.play(),
  },
  {
    value: "r",
    speak: () => fx.phonics.r.play(),
  },
  {
    value: "s",
    speak: () => fx.phonics.s.play(),
  },
  {
    value: "t",
    speak: () => fx.phonics.t.play(),
  },
  {
    value: "u",
    speak: () => fx.phonics.u.play(),
  },
  {
    value: "v",
    speak: () => fx.phonics.v.play(),
  },
  {
    value: "w",
    speak: () => fx.phonics.w.play(),
  },
  {
    value: "x",
    speak: () => fx.phonics.x.play(),
  },
  {
    value: "y",
    speak: () => fx.phonics.y.play(),
  },
  {
    value: "z",
    speak: () => fx.phonics.z.play(),
  },
];

const TWO_LETTER_WORDS = [
  {
    value: "on",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFhenVwOHZpeW51Y2ozYzBqM2VnZDFhcmptdXhndGx5Mm9kczhtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/piO8R2DMyCXdalfXWQ/giphy.webp",
  },
  {
    value: "up",
    pronunciation: "op",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpxZjFrZTg4aGF6dGhmM3RsbDBjOGFnMnJ6M3E3ejdybHI3cmNhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iZGpuaRKdEZoI/giphy.webp",
  },
  {
    value: "go",
    pronunciation: "gō",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpuaWNsNjJpa2w2bHp4czJlMGExZGtjY21oYWoxc281bjBraXZrcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7ZetIsjtbkgNE1I4/200.webp",
  },
  {
    value: "no",
    pronunciation: "nō",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzB2eHRyYW12dmU2M2lvNnRvczlkZjRzOGNkNHB3dXc4NGtqYjd3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/izHlHlaz9n99skGyUt/giphy.webp",
  },
  {
    value: "me",
    pronunciation: "mi",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqOTUwaXo0ZHl5cXQ2a3dqcWc4cTc0a2RkYWtjbTExZjdmN2hoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i3L6JoWcVZj1HuURSE/giphy.webp",
  },
];

const THREE_LETTER_WORDS = [
  {
    value: "you",
    pronunciation: "yuu",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnJwNmFjMXRwc2h1dmdyNG92MW1uamlrZzNtZWZmcGxzOWxrZGV0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5BUKkB7Ve74nYaF5tL/giphy.webp",
  },
  {
    value: "yes",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDc5eWowaTMzeGo1ZHhocTh1N25qZWNpbXI2NWdkZ3VwYTUyM2ZmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kwCLw42hH2cxvIywIi/giphy.webp",
  },
  {
    value: "off",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFhenVwOHZpeW51Y2ozYzBqM2VnZDFhcmptdXhndGx5Mm9kczhtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/piO8R2DMyCXdalfXWQ/giphy.webp",
  },
  {
    value: "bed",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzU4cHh6cmhwMzIyMHNjYmJ3dnY4MHU2ejBxbXZubm01M2xiMTg1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wsUuw16j6oyxLLRnnK/giphy.webp",
  },
  {
    value: "dog",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnd0MmVjajg3emY5NWNpYzYwMjNsOG5uNDdhdXlvczRyYWs4cjA1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qAYyGomTMWkqyME/giphy.webp",
  },
  {
    value: "cat",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmI2cTdoY2o0czVpejkxNTc1cnM5dmhycHJ6eDMxYmY1ZGdrcjJtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nR4L10XlJcSeQ/200.webp",
  },
  {
    value: "sun",
    pronunciation: "son",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhtaHJzNnVvMmllZ29ldTE0ZGMxdmFlNG9xYnkybGJ5cmNrcGdoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Fm7jEapE18HwS6fkT/giphy.webp",
  },
  {
    value: "big",
    pronunciation: "big",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmE1ajZ4MHNld3hmcDNlbGVvbnNzM3FwcmZhZzV3MXd0dG1sYTF4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/85AU17hrcbCCMko/giphy.webp",
  },
  {
    value: "boy",
    pronunciation: "boy",
    image:
      "https://plus.unsplash.com/premium_photo-1672243483821-5d3855a21809?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FOUR_LETTER_WORDS = [
  {
    value: "book",
    pronunciation: "buuk",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNldjJ3djI1bHNraXNtbHFiZXJheTNjNmNodnllZ2puNzc1Mjl6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77Y1T0zY1gR5qe5O/giphy.webp",
  },
  {
    value: "look",
    pronunciation: "luuk",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHdtaWRhbXQ1aWl0YzR2aWhjanJmdmNybGo0YmZmbXV2YXE1cm9hNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UymgKJ3zWAgCZTVN16/giphy.webp",
  },
  {
    value: "good",
    pronunciation: "guud",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGExdGFma2FkOWdvemJ1azdpeXg4YmYyeGVsMm53N2s0eGNkZDhtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NDjtmyXAAUWKQ/200.webp",
  },
];

const FIVE_LETTER_WORDS = [
  {
    value: "apple",
    pronunciation: "appll",
    image:
      "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "house",
    pronunciation: "hōuss",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "happy",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHVvaXJ3Mm0wMHRrdHRhOWxkN3YycnRqaHVkcmIyenBiOGIwaGk1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fPRwBcYd71Lox1v7p2/giphy.webp",
  },
  {
    value: "bikes",
    pronunciation: "bīkss",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lrNzI4cDA2N3Jobzg0dTd0b2NydTcxcGtqZGIxc2FydXdnNHN4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q9XePYwXATVa53K899/giphy.webp",
  },
];

export const WORDS = {
  2: TWO_LETTER_WORDS,
  3: THREE_LETTER_WORDS,
  4: FOUR_LETTER_WORDS,
  5: FIVE_LETTER_WORDS,
};

export type Levels = keyof typeof WORDS;

export const ALL_WORDS = [
  ...TWO_LETTER_WORDS,
  ...THREE_LETTER_WORDS,
  ...FOUR_LETTER_WORDS,
  ...FIVE_LETTER_WORDS,
];
