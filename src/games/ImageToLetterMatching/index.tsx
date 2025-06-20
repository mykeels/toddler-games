import { useEffect, useMemo, useState } from "react";
import {
  getFirstCharOptions,
  LETTERS,
  getNextCharacter,
  ANIMALS,
  FRUITS,
} from "@/utils/characters";
import { useHorizontalSwipe } from "@/utils/swipe";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import Container from "@/Container";
import Card from "@/Card";
import Next from "@/Next";
import { useSpeak } from "@/utils/speak";
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";
import README from "./README.md";
import { sleep } from "@/utils/sleep";
import { useRestart } from "@/utils/restart";

const IMAGES = [...ANIMALS, ...FRUITS];

export type ImageToLetterMatchingProps = {
  transformLetter?: (letter: string) => string;
  level?: number;
  onNext?: () => void;
};

export const ImageToLetterMatching = ({
  transformLetter = (letter) => letter,
  onNext,
  ...props
}: ImageToLetterMatchingProps) => {
  const { speak } = useSpeak();
  const { life, restart } = useRestart();
  const [state, setState] = useState<"playing" | "interlude">("playing");
  const image = useMemo(
    () => getNextCharacter(IMAGES),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [life]
  );
  const level = useLevel();
  const noOfOptions = (props.level ?? level) + 1;
  const letters = useMemo(
    () =>
      shuffleArray(getFirstCharOptions(LETTERS, image.name, noOfOptions)).map(
        transformLetter
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [image.name, noOfOptions]
  );
  const goal = transformLetter(image.name[0]);
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === goal;

  const [showConfetti, Confetti] = useConfetti();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLetterClick = async (letter: string) => {
    setSelected(letter);
    if (letter === goal) {
      fx.correct.play();
      await sleep(300);
      speak(`${letter} for ${image.name}`);

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
    setSelected(null);
    setState("playing");
    restart();
    onNext?.();
  };

  useEffect(() => {
    fx.game.play();
  }, []);

  const { ref } = useHorizontalSwipe({
    onSwipe: () => onNextClick(),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const speakGoal = async () => {
    for (let i = 0; i < 2; i++) {
      speak(goal.toUpperCase(), { rate: 1.2 });
      await sleep(750);
    }
    speak(image.name);
  };

  useEffect(() => {
    speakGoal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.name]);

  useEffect(() => {
    const controller = new AbortController();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (letters.map(l => l.toLowerCase()).includes(event.key.toLowerCase())) {
        const button = document.querySelector(`[data-value="${event.key.toLowerCase()}"]`);
        if (button) {
          button.tap();
        }
      }
      else if (event.key === "Enter") {
        onNextClick();
      } else if (event.key === " ") {
        if (!isCorrect) {
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
  }, [onNextClick, onLetterClick, letters, isCorrect, speakGoal]);

  return (
    <Container key={life} ref={ref as React.LegacyRef<HTMLDivElement>}>
      <Header
        title="Match Image to Letter"
        onRestart={onNextClick}
        Right={<Header.Info description={README} />}
      >
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          {state === "interlude"
            ? `${image.name} starts with ${goal}`
            : `${image.name} starts with...`}
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        <button
          className="text-center py-8 text-9xl font-bold"
          onClick={() => speak(image.name)}
        >
          {image.value}
        </button>
        <div data-name="pair" className="flex justify-center flex-wrap gap-4">
          {letters.map((letter) => (
            <Card
              key={letter}
              value={letter}
              selectedValue={goal}
              onClick={() => onLetterClick(letter)}
              name="pair"
            >
              {letter}
              {letter === goal ? Confetti : null}
            </Card>
          ))}
        </div>
        <Next
          onNext={onNextClick}
          className={{
            invisible: !(state == "interlude" && selected && isCorrect),
          }}
        />
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
