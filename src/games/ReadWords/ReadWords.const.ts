import { speak } from "@/utils/speak";

export const PHONICS_LETTERS = [
    {
        value: "a",
        speak: () => speak("ah")
    },
    {
        value: "b",
        speak: () => speak("buh")
    },
    {
        value: "c",
        speak: () => speak("kuh")
    },
    {
        value: "d",
        speak: () => speak("duh")
    },
    {
        value: "e",
        speak: () => speak("eh")
    },
    {
        value: "f",
        speak: () => speak("fuh")
    },
    {
        value: "g",
        speak: () => speak("gah")
    },
    {
        value: "h",
        speak: () => speak("hah")
    },
    {
        value: "i",
        speak: () => speak("ee")
    },
    {
        value: "j",
        speak: () => speak("juh")
    },
    {
        value: "k",
        speak: () => speak("kuh")
    },
    {
        value: "l",
        speak: () => speak("luh")
    },
    {
        value: "m",
        speak: () => speak("muh")
    },
    {
        value: "n",
        speak: () => speak("nih")
    },
    {
        value: "o",
        speak: () => speak("aw")
    },
    {
        value: "p",
        speak: () => speak("puh")
    },
    {
        value: "q",
        speak: () => speak("kwuh")
    },
    {
        value: "r",
        speak: () => speak("ruh")
    },
    {
        value: "s",
        speak: () => speak("sih")
    },
    {
        value: "t",
        speak: () => speak("tuh")
    },
    {
        value: "u",
        speak: () => speak("ooh")
    },
    {
        value: "v",
        speak: () => speak("vuh")
    },
    {
        value: "w",
        speak: () => speak("wuh")
    },
    {
        value: "x",
        speak: () => speak("eks")
    },
    {
        value: "y",
        speak: () => speak("yih")
    },
    {
        value: "z",
        speak: () => speak("zi")
    },
];

const TWO_LETTER_WORDS = [
  "on",
  "up",
  "go",
  "no",
  "do",
  "to",
];

const THREE_LETTER_WORDS = [
  "you",
  "yes",
  "off",
  "bed",
  "dog",
  "cat",
  "sun",
];

export const WORDS = {
    2: TWO_LETTER_WORDS,
    3: THREE_LETTER_WORDS,
}