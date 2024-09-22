import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

export const FreeDraw = () => {
  const [size, setSize] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(2);

  useEffect(() => {
    setSize({
      width: containerRef.current?.clientWidth ?? 0,
      height: containerRef.current?.clientHeight ?? 0,
    });
  }, []);

  const clearCanvas = () => {};

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
        />
      </div>
    </div>
  );
};

export default FreeDraw;
