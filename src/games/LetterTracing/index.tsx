import { useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "clsx";
import { fx } from "@/utils/sound";
import Across from "./Across/Across";
import { useFullScreenSize } from "@/utils/screen";
import { LetterSvgProps } from "./LetterTracing.types";
import { Screens, useMedia } from "@/utils/useMedia";
import { useRestart } from "@/utils/restart";
import Header from "@/Header/Header";
import { speak } from "@/utils/speak";

type LetterTracingProps = {
  Letter?: (props: LetterSvgProps) => React.ReactNode;
};

export const LetterTracing = ({ Letter = Across }: LetterTracingProps) => {
  const { size, containerRef } = useFullScreenSize();
  useEffect(() => {
    fx.game.play();
  }, []);
  const letters = useMedia([Screens.SM], [[0]], [0, 1, 2, 3]);
  const letterSize = useMedia([Screens.SM], ["60dvh"], "40dvh");
  const { life, restart } = useRestart();

  useEffect(() => {
    speak(`Let's trace ${Letter.name}.`);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Header title="Can you trace this?" onRestart={restart} />
      <div
        className="flex flex-col space-y-4 items-center justify-center grow relative"
        ref={containerRef}
      >
        <div className={classNames(
            "w-full h-full absolute top-0 left-0 content-center place-items-center gap-8",
            {
              "grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2": letters.length > 1
            }
          )}>
          {letters.map((item) => (
            <Letter size={letterSize} key={item} />
          ))}
        </div>
        <CanvasDraw
          key={life}
          canvasWidth={size.width}
          canvasHeight={size.height}
          brushRadius={10}
          brushColor="red"
          lazyRadius={0}
        />
      </div>
    </div>
  );
};

export default LetterTracing;
