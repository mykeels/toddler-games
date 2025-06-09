import { useEffect, useMemo, useState } from "react";
import classNames from "clsx";
import { fx } from "@/utils/sound";
import { speak } from "@/utils/speak";
import { vibrate } from "@/utils/vibrate";
import { useConfetti } from "@/Confetti";
import { useLevel } from "@/Header/Levels";
import { type Levels, WORDS } from "@/utils/words";
import Container from "@/Container";
import Header from "@/Header/Header";
import Next from "@/Next";
import README from "./README.md";
import { getOptions } from "@/utils/characters";
import { useRestart } from "@/utils/restart";
import Card from "@/Card";
import { sleep } from "@/utils/sleep";

type WhatDoYouHearProps = {
    getWordSet?: (level?: number) => typeof WORDS[Levels];
    level?: Levels;
    onNext?: () => void;
};

const ONE_WORD_SET = Object.keys(fx.alphabet)
    .map((letter) => ({ value: letter, pronunciation: letter, image: letter }));

export const WhatDoYouHear = ({
    getWordSet = (level) => level === 1 ? ONE_WORD_SET : level ? WORDS[level as Levels] : WORDS[2],
    onNext,
    ...props
}: WhatDoYouHearProps) => {
    const { life, restart } = useRestart();
    const level = useLevel();
    const noOfWordCharacters = Math.min((Number(props.level) || level), 6) as Levels;
    const wordSet = getWordSet(noOfWordCharacters);
    const getNextPair = () => getOptions(wordSet.map((word) => ({ value: word.value, name: word.value })), 2);
    const [pair, setPair] = useState(getNextPair());
    const goal = useMemo(
        () => pair[Math.floor(Math.random() * pair.length)],
        [life, pair, level, noOfWordCharacters]
    );
    const [selected, setSelected] = useState<string | null>(null);
    const isCorrect = selected === goal.value;
    const [showConfetti, Confetti] = useConfetti();

    const onOptionClick = (option: string) => {
        setSelected(option);
    };
    
    useEffect(() => {
      if (!selected) {
        return;
      }
      if (selected === goal.value) {
        fx.correct.play();
        showConfetti();
      } else if (selected !== goal.value) {
        fx.incorrect.play();
        vibrate();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, goal]);

    const onNextClick = () => {
        fx.click.play();
        setPair(getNextPair());
        setSelected(null);
        restart();
        onNext?.();
    };

    useEffect(() => {
        speak("Listen! What do you hear?");
    }, [life, level]);

    useEffect(() => {
        async function run() {
            await sleep(2000);
            for (let speakCount = 0; speakCount < 3; speakCount++)
            {
                fx.keys.play(goal.value);
                await sleep(1000);
            }
        }
        run();
    }, [goal.value]);

    return (
        <Container key={life}>
            <Header
                title="What Do You Hear?"
                onRestart={onNextClick}
                Right={<Header.Info description={README} />}
            >
                <button onClick={() => fx.keys.play(goal.value)}>
                    What Do You Hear?
                </button>
            </Header>
            <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
                <div className="flex justify-center gap-4">
                    {pair.map((option) => (
                        <Card
                            key={option.value}
                            value={option.value}
                            selectedValue={goal.value}
                            onClick={() => onOptionClick(option.value)}
                            name="pair"
                            className={{
                                width: "w-auto",
                                "px-8 py-4": true,
                            }}
                        >
                            <span className={classNames("uppercase text-base sm:text-4xl text-center")}>{option.value}</span>
                            {option.value === goal.value ? Confetti : null}
                        </Card>
                    ))}
                </div>
                <Next
                    onNext={onNextClick}
                    className={{
                        invisible: !isCorrect
                    }}
                />
            </div>
        </Container>
    );
};

export default WhatDoYouHear;