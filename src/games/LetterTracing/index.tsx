import { useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "clsx";
import { fx } from "@/utils/sound";
import Across from "./Across/Across";
import { useFullScreenSize } from "@/utils/screen";
import { SvgProps } from "./LetterTracing.types";
import { Screens, useMedia } from "@/utils/useMedia";
import { useRestart } from "@/utils/restart";
import Header from "@/Header/Header";
import { speak } from "@/utils/speak";
import { Menu } from "@/Header/Menu";
import README from "./README.md";

type LetterTracingProps = {
  name: string;
  Letter?: (props: SvgProps) => React.ReactNode;
};

export const LetterTracing = ({ name, Letter = Across }: LetterTracingProps) => {
  const { size, containerRef } = useFullScreenSize();
  useEffect(() => {
    fx.game.play();
  }, []);
  const letters = useMedia([Screens.SM], [[0]], [0, 1, 2, 3]);
  const printableLetters = new Array(20).fill(null).map((_, index) => index + 1);
  const { life, restart } = useRestart();

  useEffect(() => {
    speak(`Let's trace ${name}.`);
  }, [life, name]);

  return (
    <div className="flex flex-col h-full">
      <Header
        title="Can you trace this?"
        onRestart={restart}
        noLevels
        Right={
          <>
            <Menu.Item>
              <button onClick={() => {
                window.print();
                }}
                className="print:hidden"
              >
                <img src="./icons/print-white.svg" alt="Print" />
              </button>
            </Menu.Item>
            <Menu.Item>
              <Header.Info description={README} />
            </Menu.Item>
          </>
        }
      >
        <button className="focus:outline-none" onClick={() => speak(name)}>
          {name}
        </button>
      </Header>
      <div
        className="flex flex-col space-y-4 items-center justify-center grow relative"
        ref={containerRef}
      >
        <div className={classNames(
          "w-full h-full absolute top-0 left-0 content-center place-items-center gap-8 p-4 sm:p-16 print:hidden",
          {
            "grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2": letters.length > 1
          }
        )}>
          {letters.map((item) => (
            <Letter size="100%" key={item} />
          ))}
        </div>
        <div className={classNames(
          "w-full h-full hidden flex-wrap print:flex gap-8 items-center justify-center pb-8"
        )}>
          {printableLetters.map((item) => (
            <Letter size="20dvw" key={item} />
          ))}
        </div>
        <div
          className="print:hidden">
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
    </div>
  );
};

export default LetterTracing;
