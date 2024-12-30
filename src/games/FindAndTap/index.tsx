import { useEffect, useMemo, useState } from "react";

import { Character, CHARACTERS, getOptions } from "@/utils/characters";
import { useHorizontalSwipe } from "@/utils/swipe";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import { vibrate } from "@/utils/vibrate";
import Card from "@/Card";
import Next from "@/Next";
import { speak } from "@/utils/speak";
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";
import README from "./README.md";

export type FindAndTapProps = {
  getCharacterSet?: (set: typeof CHARACTERS) => Character[];
  level?: number;
  onNext?: () => void;
}

export function FindAndTap({
  getCharacterSet = (set: typeof CHARACTERS) => set.uppercaseLetters,
  onNext,
  ...props
}: FindAndTapProps) {
  const characters = getCharacterSet(CHARACTERS);
  const [gameIndex, setGameIndex] = useState(0);
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const level = useLevel();
  const noOfOptions = (props.level ?? level) + 1;
  const getNextPair = () => getOptions(characters, noOfOptions);
  const [pair, setPair] = useState<Character[]>(getNextPair());
  useEffect(() => {
    setPair(getNextPair());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfOptions]);
  const goal = useMemo(
    () => pair[Math.floor(Math.random() * pair.length)],
    [pair]
  );
  const [selected, setSelected] = useState<Character | null>(null);
  const isCorrect = selected?.value === goal.value;

  const [showConfetti, Confetti] = useConfetti();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLetterOrNumberClick = (letterOrNumber: Character) => {
    setSelected(letterOrNumber);
    if (letterOrNumber.value === goal.value) {
      fx.correct.play();
      showConfetti();
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
    onNext?.();
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
    speak(`Tap ${goal.name}`);
  }, [goal, gameIndex]);

  return (
    <Container
      ref={ref as React.LegacyRef<HTMLDivElement>}
      key={`game:${gameIndex}-options:${noOfOptions}`}
    >
      <Header
        title="Find and Tap"
        onRestart={onNextClick}
        Right={
          <Header.Info description={README} />
        }
      >
        Tap {goal.value}
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-16">
        <div data-name="pair" className="flex justify-center flex-wrap gap-4"
        >
          {
            pair.map(character => <Card
              key={character.value}
              value={character.value}
              selectedValue={goal.value}
              onClick={() => onLetterOrNumberClick(character)}
              name="pair"
            >
              {character.value}
              {character.value === goal.value ? Confetti : null}
            </Card>)
          }
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
