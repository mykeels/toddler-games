import { useEffect, useMemo, useState } from "react";

import { CHARACTERS } from "@/utils/characters";
import { useHorizontalSwipe } from "@/utils/swipe";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import Card from "@/Card";
import Next from "@/Next";
import { speak } from "@/utils/speak";

function FindAndTap({
  getCharacterSet = (set: typeof CHARACTERS) => set.uppercaseLetters,
}: {
  getCharacterSet?: (set: typeof CHARACTERS) => string[];
} = {}) {
  const characters = getCharacterSet(CHARACTERS);
  const [gameIndex, setGameIndex] = useState(0);
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const getNextPair = () => getRandomPair(characters);
  const [pair, setPair] = useState<string[]>(getNextPair());
  const goal = useMemo(
    () => pair[Math.floor(Math.random() * pair.length)],
    [pair]
  );
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === goal;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLetterOrNumberClick = (letterOrNumber: string) => {
    setSelected(letterOrNumber);
    if (letterOrNumber === goal) {
      fx.correct.play();
    } else {
      fx.incorrect.play();
    }
    setState("interlude");
    vibrate();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNextClick = () => {
    fx.click.play();
    setPair(getNextPair());
    setState("playing");
    setGameIndex(gameIndex + 1);
    vibrate();
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        onNextClick();
      } else if (event.key === "ArrowLeft") {
        onLetterOrNumberClick(pair[0]);
      } else if (event.key === "ArrowRight") {
        onLetterOrNumberClick(pair[1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, onLetterOrNumberClick, pair]);

  useEffect(() => {
    fx.game.play();
  }, []);

  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick(),
  });

  useEffect(() => {
    speak(`Tap on ${goal}`);
  }, [goal, gameIndex]);

  return (
    <Container
      ref={ref as React.LegacyRef<HTMLDivElement>}
      key={gameIndex}
    >
      <Header title="Find and Tap" onRestart={onNextClick}>
        Tap on {goal}
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-16">
        <div data-name="pair" className="flex justify-center space-x-8"
        >
          <Card
            value={pair[0]}
            onClick={() => onLetterOrNumberClick(pair[0])}
            selectedValue={goal}
            name="pair"
          >
            {pair[0]}
          </Card>
          <Card
            value={pair[1]}
            onClick={() => onLetterOrNumberClick(pair[1])}
            selectedValue={goal}
            name="pair"
          >
            {pair[1]}
          </Card>
        </div>
        <Next
          onNext={onNextClick}
          className={{
            invisible: !(state == "interlude" && isCorrect)
          }}
        />
      </div>


    </Container>
  );
}

export default FindAndTap;

function getRandomPair(characters: string[]): [string, string] {
  const firstIndex = Math.floor(Math.random() * characters.length);
  let secondIndex = Math.floor(Math.random() * characters.length);
  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * characters.length);
  }
  return [characters[firstIndex], characters[secondIndex]];
}
