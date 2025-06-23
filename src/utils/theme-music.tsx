import { useEffect } from 'react';
import { fx } from './sound';
import { useWindowFocus } from '@/hooks/useWindowFocus';
import { sleep } from './sleep';

const DEFAULT_MUSIC_VOLUME = 0.3;

export const ThemeMusic = () => {
  const play = () => {
    fx.theme.volume(DEFAULT_MUSIC_VOLUME);
    fx.theme.loop(true).play();
  };
  const stop = () => {
    graduallyReduceVolumeThenStop(fx.theme);
  };
  useWindowFocus({
    onFocus: () => {
      play();
    },
    onBlur: () => {
      stop();
    },
  });
  useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, []);
  return null;
};

const graduallyReduceVolumeThenStop = async (audio: Howl) => {
  const originalVolume = audio.volume();
  const step = originalVolume / 15;
  const interval = setInterval(() => {
    audio.volume(audio.volume() - step);
  }, 100);
  await sleep(1500);
  clearInterval(interval);
  audio.volume(0);
  audio.stop();
};
