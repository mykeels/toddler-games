import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export function useConfetti(): [() => void, React.ReactNode] {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  }, [visible]);
  return [
    () => {
      setVisible(true);
    },
    visible ? <ConfettiExplosion /> : null,
  ];
}
