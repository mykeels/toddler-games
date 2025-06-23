import { useState } from 'react';
import { fx } from './sound';

export const useRestart = () => {
  const [life, setLife] = useState(0);
  const restart = () => {
    setLife(life + 1);
    fx.click.play();
  };
  return { life, restart };
};
