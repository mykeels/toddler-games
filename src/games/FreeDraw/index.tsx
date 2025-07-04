import '@excalidraw/excalidraw/index.css';
import '@/excalidraw.css';
import { useEffect, useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { fx } from '@/utils/sound';
import Header from '@/Header/Header';
import { useRestart } from '@/utils/restart';
import { speak } from '@/utils/speak';
import README from './README.md';

export const FreeDraw = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fx.game.play();
  }, []);

  const { life, restart } = useRestart();
  const speakGoal = () => {
    speak('Draw something beautiful!');
  };
  useEffect(speakGoal, []);

  const onNextClick = () => {
    restart();
  };

  return (
    <div className="flex flex-col h-full">
      <Header onRestart={onNextClick} Right={<Header.Info description={README} />} noLevels>
        <button className="focus:outline-none" onClick={() => speakGoal()}>
          Free Draw
        </button>
      </Header>
      <div className="flex flex-col space-y-4 items-center justify-center grow relative" ref={containerRef}>
        <Excalidraw
          key={life}
          UIOptions={{
            canvasActions: {
              loadScene: false,
            },
            tools: {
              image: false,
            },
          }}
          initialData={{
            appState: {
              activeTool: { type: 'freedraw', customType: null, lastActiveTool: null, locked: false },
              currentItemStrokeWidth: 3.5,
              currentItemStrokeColor: '#f00',
            },
          }}
          // The Excalidraw canvas will automatically fill its container
        />
      </div>
    </div>
  );
};

export default FreeDraw;
