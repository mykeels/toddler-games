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
import { fx } from "@/utils/sound";
import clsx from "clsx";

export const PlaceTheLetters = ({ onNext }: { onNext?: () => void }) => {
  const { life, restart } = useRestart();
  const level = useLevel();
  const wordData = useMemo(() => {
    const words = WORDS[level + 1 as Levels] || [{
      value: "NONE"
    }];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, life]);
  const word = wordData.value;
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const speakGoal = () => {
    speak(`Let's spell, ${word}`);
    fx.click.play();
  };
  useEffect(speakGoal, [word, onNext]);
  const fontSize = `${(85 / (characters.length + 2))}dvw`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNextClick = () => {
    restart();
    onNext?.();
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === " ") {
        if (!isCompleted) {
          speakGoal();
        } else {
          onNextClick();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, isCompleted, speakGoal]);

  return <Container key={life}>
    <Header
      onRestart={onNextClick}
      Right={
        <Header.Info description={README} />
      }
    >
      <button className="focus:outline-none" onClick={() => speakGoal()}>
        Place the letters in the word
      </button>
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
        <button className={clsx("flex flex-col items-center justify-center", {
          'invisible': !isCompleted
        })} onClick={() => {
          speakGoal();
        }}>
          {Confetti}
          {
            !!wordData.image && (
              <img src={wordData.image} alt={word} className={clsx("w-48 h-48 hsx:w-24 hsx:h-24 hsm:w-24 hsm:h-24 border-2 border-white rounded-lg")} />
            )
          }
        </button>
        <Next
          onNext={onNextClick}
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
