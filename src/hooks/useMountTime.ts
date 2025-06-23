import { useEffect, useState } from 'react';
import { differenceInSeconds, differenceInMinutes, differenceInHours } from 'date-fns';

/**
 * Use this hook to get the time elapsed since the component mounted.
 * @returns The time elapsed since the component mounted.
 */
export const useMountTime = () => {
  const [mountTime, setMountTime] = useState(new Date());
  useEffect(() => {
    setMountTime(new Date());
  }, []);
  return {
    mountTime,
    elapsedTime() {
      const now = new Date();
      return {
        seconds: differenceInSeconds(now, mountTime),
        minutes: differenceInMinutes(now, mountTime),
        hours: differenceInHours(now, mountTime),
      };
    },
  };
};
