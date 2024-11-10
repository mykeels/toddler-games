import { speak } from "@/utils/speak";

export const PHONICS_LETTERS = [
  {
    value: "a",
    speak: () => speak("ah"),
  },
  {
    value: "b",
    speak: () => speak("buh"),
  },
  {
    value: "c",
    speak: () => speak("kuh"),
  },
  {
    value: "d",
    speak: () => speak("duh"),
  },
  {
    value: "e",
    speak: () => speak("eh"),
  },
  {
    value: "f",
    speak: () => speak("fuh"),
  },
  {
    value: "g",
    speak: () => speak("gah"),
  },
  {
    value: "h",
    speak: () => speak("hah"),
  },
  {
    value: "i",
    speak: () => speak("ee"),
  },
  {
    value: "j",
    speak: () => speak("juh"),
  },
  {
    value: "k",
    speak: () => speak("kuh"),
  },
  {
    value: "l",
    speak: () => speak("luh"),
  },
  {
    value: "m",
    speak: () => speak("muh"),
  },
  {
    value: "n",
    speak: () => speak("nih"),
  },
  {
    value: "o",
    speak: () => speak("aw"),
  },
  {
    value: "p",
    speak: () => speak("puh"),
  },
  {
    value: "q",
    speak: () => speak("kwuh"),
  },
  {
    value: "r",
    speak: () => speak("ruh"),
  },
  {
    value: "s",
    speak: () => speak("sih"),
  },
  {
    value: "t",
    speak: () => speak("tuh"),
  },
  {
    value: "u",
    speak: () => speak("ooh"),
  },
  {
    value: "v",
    speak: () => speak("vuh"),
  },
  {
    value: "w",
    speak: () => speak("wuh"),
  },
  {
    value: "x",
    speak: () => speak("eks"),
  },
  {
    value: "y",
    speak: () => speak("yih"),
  },
  {
    value: "z",
    speak: () => speak("zi"),
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
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpxZjFrZTg4aGF6dGhmM3RsbDBjOGFnMnJ6M3E3ejdybHI3cmNhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iZGpuaRKdEZoI/giphy.webp",
  },
  {
    value: "go",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpuaWNsNjJpa2w2bHp4czJlMGExZGtjY21oYWoxc281bjBraXZrcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7ZetIsjtbkgNE1I4/200.webp",
  },
  {
    value: "no",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzB2eHRyYW12dmU2M2lvNnRvczlkZjRzOGNkNHB3dXc4NGtqYjd3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/izHlHlaz9n99skGyUt/giphy.webp",
  },
  {
    value: "me",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqOTUwaXo0ZHl5cXQ2a3dqcWc4cTc0a2RkYWtjbTExZjdmN2hoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i3L6JoWcVZj1HuURSE/giphy.webp",
  },
];

const THREE_LETTER_WORDS = [
  {
    value: "you",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnJwNmFjMXRwc2h1dmdyNG92MW1uamlrZzNtZWZmcGxzOWxrZGV0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5BUKkB7Ve74nYaF5tL/giphy.webp",
  },
  {
    value: "yes",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDc5eWowaTMzeGo1ZHhocTh1N25qZWNpbXI2NWdkZ3VwYTUyM2ZmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kwCLw42hH2cxvIywIi/giphy.webp",
  },
  {
    value: "off",
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFhenVwOHZpeW51Y2ozYzBqM2VnZDFhcmptdXhndGx5Mm9kczhtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/piO8R2DMyCXdalfXWQ/giphy.webp",
  },
  {
    value: "bed",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzU4cHh6cmhwMzIyMHNjYmJ3dnY4MHU2ejBxbXZubm01M2xiMTg1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wsUuw16j6oyxLLRnnK/giphy.webp",
  },
  {
    value: "dog",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnd0MmVjajg3emY5NWNpYzYwMjNsOG5uNDdhdXlvczRyYWs4cjA1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qAYyGomTMWkqyME/giphy.webp",
  },
  {
    value: "cat",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmI2cTdoY2o0czVpejkxNTc1cnM5dmhycHJ6eDMxYmY1ZGdrcjJtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nR4L10XlJcSeQ/200.webp",
  },
  {
    value: "sun",
    image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhtaHJzNnVvMmllZ29ldTE0ZGMxdmFlNG9xYnkybGJ5cmNrcGdoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Fm7jEapE18HwS6fkT/giphy.webp",
  },
];

export const WORDS = {
  2: TWO_LETTER_WORDS,
  3: THREE_LETTER_WORDS,
};
