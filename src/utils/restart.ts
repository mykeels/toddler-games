import { useState } from 'react';

export const useRestart = () => {
  const [life, setLife] = useState(0);
  const restart = () => {
    setLife(life + 1);
  };
  return { life, restart };
};
