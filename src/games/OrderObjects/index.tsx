import React, { useState } from 'react';

const NUM_CARDS = 5;
const generateShuffled = (n: number) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const OrderObjects = () => {
  const [cards, setCards] = useState<number[]>(() => generateShuffled(NUM_CARDS));
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const isOrdered = cards.every((val, idx) => val === idx + 1);

  const handleDragStart = (idx: number) => {
    setDraggedIdx(idx);
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
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <h2>Order the Objects</h2>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '2rem 0' }}>
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
                border: `2px solid ${inOrder ? 'green' : 'red'}`,
                background: inOrder ? '#e6ffe6' : '#ffe6e6',
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
      {isOrdered && <div style={{ color: 'green', fontWeight: 'bold', fontSize: 24 }}>You win!</div>}
      <button onClick={() => setCards(generateShuffled(NUM_CARDS))} style={{ marginTop: 24 }}>
        Restart
      </button>
    </div>
  );
};
