import React, { useState } from 'react';
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
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const isOrdered = cards.every((val, idx) => val === idx + 1);

  const handleDragStart = (idx: number) => {
    setDraggedIdx(idx);
    fx.click.play();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (idx: number) => {
    if (draggedIdx === null || draggedIdx === idx) return;
    const newCards = [...cards];
    [newCards[draggedIdx], newCards[idx]] = [newCards[idx], newCards[draggedIdx]];
    setCards(newCards);
    setDraggedIdx(null);
    // if new position is correct in the ordering, play a sound
    if (newCards[idx] === idx + 1) {
      fx.correct.play();
    } else {
      fx.incorrect.play();
    }
  };

  const speakGoal = async () => {
    await speak(`Can you order the objects?`);
  };

  const onNextClick = () => {
    restart();
    setCards(generateShuffled(noOfCards));
    setDraggedIdx(null);
    onNext?.();
  };

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
            return (
              <div
                key={val}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(idx)}
                style={{
                  width: 60,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  borderRadius: 8,
                  border: `4px solid ${inOrder ? 'green' : 'red'}`,
                  background: inOrder ? '#e6ffe6' : '#ffe6e6',
                  color: inOrder ? 'green' : 'red',
                  cursor: 'grab',
                  boxShadow: '0 2px 8px #0001',
                  userSelect: 'none',
                  transition: 'border 0.2s, background 0.2s',
                }}
              >
                {val}
              </div>
            );
          })}
        </div>

        {isOrdered && (
          <GameImage
            src={`${getBaseUrl()}/images/dazzle-thumbs-up.png`}
            alt="Dazzle thumbs up"
            className={{ size: 'w-48 h-48 hsx:w-24 hsx:h-24 hsm:w-24 hsm:h-24' }}
          />
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
