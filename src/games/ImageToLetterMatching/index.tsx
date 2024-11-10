import { useEffect, useMemo, useState } from "react";
import { IMAGES } from "./ImageToLetterMatching.const";
import { UPPERCASE_LETTERS } from "@/utils/characters";
import { useHorizontalSwipe } from "@/utils/swipe";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import Card from "@/Card";
import Next from "@/Next";
import { speak } from "@/utils/speak";
import { useConfetti } from "@/Confetti";

export const ImageToLetterMatching = ({
  transformLetter = (letter) => letter,
}: {
  transformLetter?: (letter: string) => string;
}) => {
  const [gameIndex, setGameIndex] = useState(0);
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const image = useMemo(
    () => IMAGES[Math.floor(Math.random() * IMAGES.length)],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gameIndex]
  );
  const letters = useMemo(
    () =>
      shuffleArray([
        image.word[0],
        UPPERCASE_LETTERS[Math.floor(Math.random() * UPPERCASE_LETTERS.length)],
      ]).map(transformLetter),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [image.word]
  );
  const goal = transformLetter(image.word[0]);
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
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
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
    speak(`Does ${image.word} start with ${letters[0]} or ${letters[1]}?`);
  }, [gameIndex, image.word, letters]);

  return (
    <Container
      key={gameIndex}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <Header title="Match Image to Letter" onRestart={onNextClick}>
        {state === "interlude"
          ? `${image.word} starts with ${goal}`
          : `${image.word} starts with...`}
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        <div className="text-center py-8 text-9xl font-bold">{image.image}</div>
        <div data-name="pair" className="flex justify-center space-x-8">
          <Card
            value={letters[0]}
            selectedValue={goal}
            onClick={() => onLetterClick(letters[0])}
            name="pair"
          >
            {letters[0]}
            {letters[0] === goal ? Confetti : null}
          </Card>
          <Card
            value={letters[1]}
            selectedValue={goal}
            onClick={() => onLetterClick(letters[1])}
            name="pair"
          >
            {letters[1]}
            {letters[1] === goal ? Confetti : null}
          </Card>
        </div>
        <Next onNext={onNextClick} className={{
          'invisible': !(state == "interlude" && selected && isCorrect)
        }} />
      </div>
    </Container>
  );
};

export default ImageToLetterMatching;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
