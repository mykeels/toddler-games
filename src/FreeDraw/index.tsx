import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

export const FreeDraw = () => {
  const [size, setSize] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSize({
      width: containerRef.current?.clientWidth ?? 0,
      height: containerRef.current?.clientHeight ?? 0,
    });
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
        />
      </div>
    </div>
  );
};

export default FreeDraw;
