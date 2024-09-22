import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { fx } from "../utils/sound";

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

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-4xl text-gray-800">Free Draw</h1>
      <div
        className="flex flex-col space-y-4 items-center justify-center grow"
        ref={containerRef}
      >
        <CanvasDraw
          canvasWidth={size.width}
          canvasHeight={size.height}
          brushColor={color}
        />
      </div>
    </div>
  );
};

export default FreeDraw;
