import React, { useEffect, useState } from 'react';
import Container from '@/Container';
import Header from '@/Header/Header';
import { useLevel } from '@/Header/Levels';
import { useRestart } from '@/utils/restart';
import { useSpeak } from '@/utils/speak';
import README from './README.md';
import Next from '@/Next';
import { GameImage } from '@/GameImage';
import { getBaseUrl } from '@/utils/url';
import { fx } from '@/utils/sound';
import { useConfetti } from '@/Confetti';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const generateShuffled = (n: number) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

type OrderObjectsProps = {
  level?: number;
  onNext?: () => void;
};

export const OrderObjects = ({ onNext, ...props }: OrderObjectsProps) => {
  const { speak } = useSpeak();
  const { life, restart } = useRestart();
  const level = useLevel();
  const noOfCards = (props.level ?? level) + 5;
  const [cards, setCards] = useState<number[]>(() => generateShuffled(noOfCards));
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const isOrdered = cards.every((val, idx) => val === idx + 1);

  const [showConfetti, Confetti] = useConfetti();
  const speakGoal = async () => {
    await speak(`Can you order the objects?`);
  };

  const onNextClick = () => {
    restart();
    speakGoal();
    setCards(generateShuffled(noOfCards));
    setSelectedIdx(null);
    onNext?.();
  };

  useEffect(() => {
    speakGoal();
  }, []);

  useEffect(() => {
    onNextClick();
  }, [level]);

  return (
    <Container key={`${life}-${level}-${noOfCards}`}>
      <Header title="Order Objects" onRestart={onNextClick} Right={<Header.Info description={README} />}>
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          Can you order the objects?
        </button>
      </Header>
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {cards.map((val, idx) => {
            const inOrder = val === idx + 1;
            const isSelected = selectedIdx === idx;
            return (
              <motion.div
                key={val}
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={clsx({
                  'pointer-events-none opacity-50': isOrdered,
                })}
                onClick={() => {
                  if (isOrdered) return;
                  if (selectedIdx === null) {
                    setSelectedIdx(idx);
                  } else if (selectedIdx === idx) {
                    setSelectedIdx(null);
                  } else {
                    // Swap
                    const newCards = [...cards];
                    [newCards[selectedIdx], newCards[idx]] = [newCards[idx], newCards[selectedIdx]];
                    setCards(newCards);
                    setSelectedIdx(null);
                    // Play sound
                    if (newCards[idx] === idx + 1) {
                      fx.correct.play();
                    } else {
                      fx.incorrect.play();
                    }
                    const isNowOrdered = newCards.every((val, idx) => val === idx + 1);
                    if (isNowOrdered) {
                      showConfetti();
                    }
                  }
                }}
                style={{
                  width: 60,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  borderRadius: 8,
                  border: `4px solid ${isSelected ? '#17FF70' : inOrder ? 'green' : 'red'}`,
                  background: inOrder ? '#e6ffe6' : '#ffe6e6',
                  color: inOrder ? 'green' : 'red',
                  cursor: isOrdered ? 'default' : 'pointer',
                  boxShadow: '0 2px 8px #0001',
                  userSelect: 'none',
                  transition: 'border 0.2s, background 0.2s',
                }}
              >
                {val}
              </motion.div>
            );
          })}
        </div>

        {isOrdered && (
          <>
            {Confetti}
            <GameImage
              src={`${getBaseUrl()}/images/dazzle-thumbs-up.png`}
              alt="Dazzle thumbs up"
              className={{ size: 'w-48 h-48 hsx:w-24 hsx:h-24 hsm:w-24 hsm:h-24' }}
            />
          </>
        )}

        <Next
          onNext={onNextClick}
          className={{
            invisible: !isOrdered,
          }}
        />
      </div>
    </Container>
  );
};
