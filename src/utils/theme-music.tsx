import { useEffect } from "react";
import { fx } from "./sound";

export const ThemeMusic = () => {
  useEffect(() => {
    fx.theme.volume(0.3);
    fx.theme.loop(true).play();
    return () => {
      fx.theme.stop();
    };
  }, []);
  return null;
};
