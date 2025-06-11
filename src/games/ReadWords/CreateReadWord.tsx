import { ReadWord } from "./index";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const CreateReadWord = () => {
  const [word, setWord] = useState("hello");
  const [pronunciation, setPronunciation] = useState("hellō");
  const isReady =
    word.length > 0 &&
    pronunciation.length > 0 &&
    word.length === pronunciation.length;

  const PronunciationButton = ({ character }: { character: string }) => {
    return (
      <Button
        type="button"
        onClick={() => setPronunciation(pronunciation + character)}
        className="border-2 border-blue-200 hover:animate-breathe text-2xl bg-white text-brand-primary"
      >
        {character}
      </Button>
    );
  };
  return (
    <div className="flex flex-col gap-2 bg-brand-primary p-2">
      <form className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-between">
          <div>
            <Button
              type="button"
              className="bg-white text-brand-primary border-2 border-blue-200 text-2xl p-4"
              onClick={() => {
                setWord("");
                setPronunciation("");
              }}
            >
              Clear
            </Button>
          </div>
          <div className="flex flex-row gap-2 items-center justify-end">
            <PronunciationButton character="ā" />
            <PronunciationButton character="ē" />
            <PronunciationButton character="ī" />
            <PronunciationButton character="ō" />
            <PronunciationButton character="ū" />
            <PronunciationButton character="š" />
            <PronunciationButton character="č" />
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Input
            className="bg-white text-brand-primary border-2 border-blue-200 text-2xl p-4"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <Input
            className="bg-white text-brand-primary border-2 border-blue-200 text-2xl p-4"
            value={pronunciation}
            onChange={(e) => setPronunciation(e.target.value)}
          />
        </div>
      </form>
      {isReady && (
        <ReadWord
          goal={{
            value: word.toLowerCase(),
            pronunciation: pronunciation.slice(0, word.length).toLowerCase(),
          }}
          standalone
          className={{
            "bg-brand-primary": false,
            "bg-transparent": true,
          }}
        />
      )}
    </div>
  );
};
