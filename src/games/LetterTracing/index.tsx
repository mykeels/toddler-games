import { useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import { fx } from "@/utils/sound";
import Across from "./Across/Across";
import { useFullScreenSize } from "@/utils/screen";
import { LetterSvgProps } from "./LetterTracing.types";
import { Screens, useMedia } from "@/utils/useMedia";
import { Link } from "@tanstack/react-router";
import { useRestart } from "@/utils/restart";

type LetterTracingProps = {
  Letter?: (props: LetterSvgProps) => React.ReactNode;
};

export const LetterTracing = ({ Letter = Across }: LetterTracingProps) => {
  const { size, containerRef } = useFullScreenSize();
  useEffect(() => {
    fx.game.play();
  }, []);
  const letters = useMedia([Screens.SM], [[0]], [0, 1, 2, 3]);
  const letterSize = useMedia([Screens.SM], ["80dvh"], "40dvh");
  const { life, restart } = useRestart();

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-4xl text-gray-800">
        <Link to="/" search={{ title: "Letter Tracing" }} className="float-left">
          🔙
        </Link>
        <span>Can you trace this?</span>
        <button className="float-right" onClick={restart}>
          ↪️
        </button>
      </h1>
      <div
        className="flex flex-col space-y-4 items-center justify-center grow relative max-h-[80dvh]"
        ref={containerRef}
      >
        <div className="w-full h-full absolute top-0 left-0 grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 place-items-center gap-8">
          {letters.map((item) => (
            <Letter size={letterSize} key={item} />
          ))}
        </div>
        <CanvasDraw
          key={life}
          canvasWidth={size.width}
          canvasHeight={size.height}
          brushColor="red"
        />
      </div>
    </div>
  );
};

export default LetterTracing;
