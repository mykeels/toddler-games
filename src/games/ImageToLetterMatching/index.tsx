import { useEffect, useMemo, useState } from "react";
import { getFirstCharOptions, LETTERS, getNextCharacter, ANIMALS, FRUITS } from "@/utils/characters";
import { useHorizontalSwipe } from "@/utils/swipe";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import Card from "@/Card";
import Next from "@/Next";
import { speak } from "@/utils/speak";
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";
import README from "./README.md";
import { vibrate } from "@/utils/vibrate";
const IMAGES = [...ANIMALS, ...FRUITS];

export type ImageToLetterMatchingProps = {
  transformLetter?: (letter: string) => string;
  level?: number;
  onNext?: () => void;
}

export const ImageToLetterMatching = ({
  transformLetter = (letter) => letter,
  onNext,
  ...props
}: ImageToLetterMatchingProps) => {
  const [gameIndex, setGameIndex] = useState(0);
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const image = useMemo(
    () => getNextCharacter(IMAGES),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gameIndex]
  );
  const level = useLevel();
  const noOfOptions = (props.level ?? level) + 1;
  const letters = useMemo(
    () =>
      shuffleArray(getFirstCharOptions(LETTERS, image.name, noOfOptions)).map(transformLetter),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [image.name, noOfOptions]
  );
  const goal = transformLetter(image.name[0]);
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === goal;

  const [showConfetti, Confetti] = useConfetti();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLetterClick = (letter: string) => {
    setSelected(letter);
    if (letter === goal) {
      fx.correct.play();
      showConfetti();
    } else {
      fx.incorrect.play();
    }
    setSelected(letter);
    setState("interlude");
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onNextClick = () => {
    fx.click.play();
    setSelected(null);
    setGameIndex(gameIndex + 1);
    setState("playing");
    vibrate();
    onNext?.();
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        onNextClick();
      } else if (event.key === "ArrowLeft") {
        onLetterClick(letters[0]);
      } else if (event.key === "ArrowRight") {
        onLetterClick(letters[1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, [onNextClick, onLetterClick, letters]);

  useEffect(() => {
    fx.game.play();
  }, []);

  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick(),
  });

  useEffect(() => {
    speak(`Does ${image.name} start with ${listOptions(letters)}?`);
  }, [gameIndex, image.name, letters]);

  return (
    <Container
      key={gameIndex}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <Header
        title="Match Image to Letter"
        onRestart={onNextClick}
        Right={
          <Header.Info description={README} />
        }
      >
        {state === "interlude"
          ? `${image.name} starts with ${goal}`
          : `${image.name} starts with...`}
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        <button className="text-center py-8 text-9xl font-bold" onClick={() => speak(image.name)}>{image.value}</button>
        <div data-name="pair" className="flex justify-center flex-wrap gap-4">
          {
            letters.map(letter => <Card
              key={letter}
              value={letter}
              selectedValue={goal}
              onClick={() => onLetterClick(letter)}
              name="pair"
            >
              {letter}
              {letter === goal ? Confetti : null}
            </Card>)
          }
        </div>
        <Next onNext={onNextClick} className={{
          'invisible': !(state == "interlude" && selected && isCorrect)
        }} />
      </div>
    </Container>
  );
};

export default ImageToLetterMatching;

function listOptions(letters: string[]): string {
  return letters.slice(0, -1).join(", ") + " or " + letters[letters.length - 1];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
