import '@excalidraw/excalidraw/index.css';

import { useEffect } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { fx } from '@/utils/sound';
import { SvgProps } from './LetterTracing.types';
import { useRestart } from '@/utils/restart';
import Header from '@/Header/Header';
import { speak } from '@/utils/speak';
import { Menu } from '@/Header/Menu';
import README from './README.md';
import { getBaseUrl } from '@/utils/url';
import { LetterTracingExercises } from './LetterTracing.consts';
import { slugify } from '@/utils/videos';
import { useQuery } from 'react-query';

type LetterTracingProps = {
  name: string;
  Letter?: (props: SvgProps) => React.ReactNode;
};

export const LetterTracing = ({ name }: LetterTracingProps) => {
  const baseUrl = getBaseUrl();
  useEffect(() => {
    fx.game.play();
  }, []);
  const { life, restart } = useRestart();

  useEffect(() => {
    speak(`Let's trace ${name}.`);
  }, [life, name]);

  const exercise = LetterTracingExercises.find((exercise) => slugify(exercise.title) === slugify(name));
  console.log({ exercise });
  const { data: exerciseData, isLoading } = useQuery({
    queryKey: ['letter-tracing', name],
    queryFn: async () => {
      const data = await fetch(`${baseUrl}/${exercise?.file}`).then((res) => res.json());

      return data;
    },
    enabled: !!exercise,
    cacheTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });

  const initialData = {
    ...exerciseData,
    source: location.origin,
    appState: {
      ...(exerciseData?.appState || {}),
      activeTool: { type: 'freedraw' },
      currentItemStrokeWidth: 2,
    },
  };

  return (
    <div className="flex flex-col h-full">
      <style>{`
      .excalidraw .panelColumn > div:nth-child(2),.excalidraw .panelColumn fieldset,.excalidraw .panelColumn > label,.excalidraw .panelColumn h3 {
        display: none !important;
      }

      .excalidraw .dropdown-menu-button, .excalidraw .shapes-section, .excalidraw .sidebar-trigger, .excalidraw .FixedSideContainer {
        display: none !important;
      }

      .excalidraw .selected-shape-actions {
        position: absolute;
      }
      `}</style>
      <Header
        title="Can you trace this?"
        onRestart={restart}
        noLevels
        Right={
          <>
            <Menu.Item>
              <button
                onClick={() => {
                  window.print();
                }}
                className="print:hidden"
              >
                <img src={`${baseUrl}/icons/print-white.svg`} alt="Print" />
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
        key={`${name}-${life}-${initialData?.source}`}
      >
        {!isLoading && (
          <Excalidraw
            // theme="dark"
            UIOptions={{
              canvasActions: {
                loadScene: true,
              },
              tools: {
                image: false,
              },
            }}
            initialData={initialData}
          />
        )}
      </div>
    </div>
  );
};

export default LetterTracing;
