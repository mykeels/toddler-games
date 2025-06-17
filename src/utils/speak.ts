import { useRef } from "react";
import { fx } from "./sound";
import { sleep } from "./sleep";

export const speak = (
  text: string,
  options: { rate?: number } = { rate: 0.85 }
) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options?.rate ?? 0.85;
  speechSynthesis.speak(utterance);
};

// examples:

/**
 * @example
 * const { speak } = useSpeak();
 * speak("Hello"); // use speech
 * speak("a"); // use phonics
 * speak("A"); // use alphabet
 * speak("1"); // use digits
 * // every call to speak will return a new speakable
 * // every call to speak will stop/cancel the previous speakable
 */
export const useSpeak = () => {
  type Speakable = {
    type: "speech" | "sound";
    value: SpeechSynthesisUtterance | Howl;
  };
  const speakable = useRef<Speakable | null>(null);
  const isPlaying = useRef(false);
  const setSpeakable = (value: Speakable) => {
    speakable.current = value;
  };

  const play = (value: SpeechSynthesisUtterance | Howl) => {
    if (value instanceof SpeechSynthesisUtterance) {
      speechSynthesis.speak(value);
    } else if (value instanceof Howl) {
      if (!value.playing()) {
        value.play();
      }
    } else {
      throw new Error("Invalid speakable type");
    }
    isPlaying.current = true;
    setSpeakable({
      type: value instanceof SpeechSynthesisUtterance ? "speech" : "sound",
      value,
    });
  };

  const stop = async (value: SpeechSynthesisUtterance | Howl | undefined) => {
    if (value instanceof SpeechSynthesisUtterance) {
      speechSynthesis.cancel();
      await sleep(100);
    } else if (value instanceof Howl) {
      value.stop();
    }
    isPlaying.current = false;
  };

  return {
    stop: () => {},
    type: speakable.current?.type,
    isPlaying: () => isPlaying.current,
    speak: async (
      text: string,
      options: { rate?: number } = { rate: 0.85 }
    ) => {
      const howl = fx.keys.play(text, options);
      const value = howl ?? new SpeechSynthesisUtterance(text);
      if (value instanceof SpeechSynthesisUtterance) {
        value.rate = options.rate ?? 0.85;
      }
      await stop(speakable.current?.value);
      return new Promise((resolve) => {
        play(value);
        if (value instanceof SpeechSynthesisUtterance) {
          value.onend = () => {
            isPlaying.current = false;
            resolve({
              speakable,
              completed: true,
            });
          };
          value.onerror = () => {
            isPlaying.current = false;
            resolve({
              speakable,
              completed: false,
            });
          };
        } else if (value instanceof Howl) {
          value.once("end", () => {
            isPlaying.current = false;
            resolve({
              speakable,
              completed: true,
            });
          });
          value.once("playerror", () => {
            isPlaying.current = false;
            resolve({
              speakable,
              completed: false,
            });
          });
        }
      });
    },
  };
};
