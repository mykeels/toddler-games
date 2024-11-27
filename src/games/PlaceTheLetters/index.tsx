import Container from "@/Container";
import Header from "@/Header/Header";
import { useLevel } from "@/Header/Levels";
import Next from "@/Next";
import { useRestart } from "@/utils/restart";
import { useEffect, useState } from "react";
import LetterSlot from "./LetterSlot/LetterSlot";
import Letter from "./Letter/Letter";

export const PlaceTheLetters = () => {
  const { life, restart } = useRestart();
  const level = useLevel();
  const { characters, placeCharacter } = useWord("APPLE");

  return <Container key={life}>
    <Header onRestart={restart}>
      Place the letters in the word
    </Header>
    <div className="flex flex-col items-center justify-center h-[90%] space-y-8 hsx:space-y-2">
      <div className="flex flex-wrap justify-center content-center items-center portrait:gap-2 landscape:gap-4 landscape:px-[10%]">
        {
          characters.map((character) => (
            character.placed
              ? <Letter key={character.id} value={character.character} />
              : <LetterSlot key={character.id} value={character.character} onDrop={() => placeCharacter(character.id)} />
          ))
        }
        {
          characters.filter(character => !character.placed).map((character) =>
            <Letter key={character.id} value={character.character} draggable={{ position: character.position }} />
          )
        }
      </div>
      <Next
        onNext={restart}
        className={{
          invisible: true
        }}
      />
    </div>

  </Container>;
};

const useWord = (word: string) => {
  const splitWord = word.split("");
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
        (-max / 2 * 0.7)
      ),
      max / 2 * 0.7
    );
    setCharacters(characters.map(character => ({
      ...character,
      position: {
        // Math.floor(Math.random() * (-window.innerWidth + 380) * -1.3)
        x: randomPosition(window.innerWidth), // Subtract letter width to keep within viewport
        y: randomPosition(window.innerHeight)
      }
    })));
  }, [word]);
  console.log(characters.map(character => character.position));
  return {
    characters,
    placeCharacter
  };
}

export default PlaceTheLetters;
