import Container from "@/Container";
import Header from "@/Header/Header";
import { useLevel } from "@/Header/Levels";
import Next from "@/Next";
import { useRestart } from "@/utils/restart";
import { Levels, WORDS } from "@/utils/words";
import { useConfetti } from "@/Confetti";
import { useEffect, useMemo, useState } from "react";
import LetterSlot from "./LetterSlot/LetterSlot";
import Letter from "./Letter/Letter";
import { speak } from "@/utils/speak";
import { getRainbowColor } from "@/utils/colors";
import README from "./README.md";
export const PlaceTheLetters = () => {
  const { life, restart } = useRestart();
  const level = useLevel();
  const word = useMemo(() => {
    const words = WORDS[level + 1 as Levels] || [{
      value: "NONE"
    }];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, life]);
  const { characters, placeCharacter } = useWord(word);
  const isCompleted = characters.every(character => character.placed);
  const [showConfetti, Confetti] = useConfetti();
  useEffect(() => {
    if (isCompleted) {
      showConfetti();
      speak("Well done!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompleted]);
  useEffect(() => {
    speak(`Let's spell, ${word}`);
  }, [word]);
  const fontSize = `${(90 / (characters.length + 2))}dvw`;

  return <Container key={life}>
    <Header
      onRestart={restart}
      Right={
        <Header.Info description={README} />
      }
    >
      Place the letters in the word
    </Header>
    <div className="flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
      <div className="flex flex-wrap justify-center content-center items-center portrait:gap-2 landscape:gap-4 landscape:px-[10%]">
        {
          characters.map((character) => (
            character.placed
              ? <Letter
                  key={character.id}
                  value={character.character}
                  color={getRainbowColor(character.id)}
                  fontSize={fontSize}
                />
              : <LetterSlot
                  key={character.id}
                  value={character.character}
                  onDrop={() => placeCharacter(character.id)}
                  fontSize={fontSize}
                />
          ))
        }
        {
          characters.map((character) =>
            character.placed
              ? null
              : <Letter
                  key={character.id}
                  value={character.character}
                  draggable={{ position: character.position }}
                  color={getRainbowColor(character.id)}
                  fontSize={fontSize}
                />
          )
        }
      </div>
      <>
        {Confetti}
        <Next
          onNext={restart}
          className={{
            invisible: !isCompleted
          }}
        />
      </>
    </div>

  </Container>;
};

const useWord = (word: string) => {
  const splitWord = useMemo(() => word.toUpperCase().split(""), [word]);
  const [characters, setCharacters] = useState(splitWord.map((character, index) => ({
    character,
    id: `${character}-${index}`,
    placed: false,
    position: {
      x: 0,
      y: 0
    }
  })));
  const placeCharacter = (id: string) => {
    setCharacters(characters.map(character => ({
      ...character,
      placed: character.placed || character.id === id
    })));
  };
  useEffect(() => {
    const randomPosition = (max: number) => Math.min(
      Math.max(
        Math.floor((Math.random() * max) - (max / 2)),
        ((-max / 2) * 0.7)
      ),
      (max / 2) * 0.7
    );
    setCharacters(splitWord.map((character, index) => ({
      character,
      id: `${character}-${index}`,
      placed: false,
      position: {
        x: randomPosition(window.innerWidth), // Subtract letter width to keep within viewport
        y: randomPosition(window.innerHeight * 0.5)
      }
    })));
  }, [splitWord]);
  return {
    characters,
    placeCharacter
  };
}

export default PlaceTheLetters;
