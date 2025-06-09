import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { fx } from "@/utils/sound";
import Header from "@/Header/Header";
import { useRestart } from "@/utils/restart";
import { speak } from "@/utils/speak";
import README from "./README.md";
export const FreeDraw = () => {
  const [size, setSize] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#008000", // Deep Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
    "#000000", // Black
  ];
  const [colorIndex, setColorIndex] = useState(0);
  const color = colors[colorIndex % colors.length];
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((index) => index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSize({
      width: containerRef.current?.clientWidth ?? 0,
      height: containerRef.current?.clientHeight ?? 0,
    });
  }, []);

  useEffect(() => {
    fx.game.play();
  }, []);

  const { life, restart } = useRestart();
  const speakGoal = () => {
    speak("Draw something beautiful!");
  };
  useEffect(speakGoal, []);

  return (
    <div className="flex flex-col h-full">
      <Header
        onRestart={restart}
        Right={
          <Header.Info description={README} />
        }
        noLevels
      >
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          Free Draw
        </button>
      </Header>
      <div
        className="flex flex-col space-y-4 items-center justify-center grow"
        ref={containerRef}
      >
        <CanvasDraw
          key={life}
          canvasWidth={size.width}
          canvasHeight={size.height}
          brushColor={color}
          lazyRadius={0}
        />
      </div>
    </div>
  );
};

export default FreeDraw;
