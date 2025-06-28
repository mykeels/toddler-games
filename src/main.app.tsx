import './index.css';
import React, { StrictMode } from 'react';
import { createHashRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LevelContextProvider } from './Header/Levels';
import { Splash } from './Splash';
import { Home } from './GameListing';
import { FindAndTapRoute } from './games/FindAndTap/route';
import NumberKeypad from './games/NumberKeypad';
import Flow from './games/Flow';
import FreeDraw from './games/FreeDraw';
import { ImageToLetterMatchingRoute } from './games/ImageToLetterMatching/route';
import ImageToLetterMatching from './games/ImageToLetterMatching';
import PlaceTheLetters from './games/PlaceTheLetters';
import { LetterTracingRoute } from './games/LetterTracing/route';
import ReadWords from './games/ReadWords';
import TapToCount from './games/TapToCount';
import TypeAway from './games/TypeAway';
import WhatDoYouHear from './games/WhatDoYouHear';
import { WhatDoYouHearRoute } from './games/WhatDoYouHear/route';
import { Layout } from './layout';
import { ErrorBoundary } from './utils/error-boundary';
import { ThemeMusic } from '@/utils/theme-music';
import { ALL_WORDS } from './utils/words';
import { AppVideo } from './Video';
import { MemoryCards } from './games/MemoryCards';
import { DetectNewVersion } from './DetectNewVersion';

const RenderMode = ({ children }: { children: React.ReactNode }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? <StrictMode>{children}</StrictMode> : children;
};

const queryClient = new QueryClient();

export const AppContexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <RenderMode>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <LevelContextProvider>
            <div className="mfe toddler-games">
              {children}
              <ThemeMusic />
              <DetectNewVersion />
            </div>
          </LevelContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </RenderMode>
  );
};

export const App = () => {
  // Create a new router instance
  const router = createHashRouter(
    [
      {
        path: '/',
        element: <Splash />,
      },
      {
        path: '/menu',
        element: <Home />,
      },
      {
        path: '/find-and-tap/:characterSet',
        element: <FindAndTapRoute />,
      },
      {
        path: '/find-and-tap/:characterSet/:subCharacterSet',
        element: <FindAndTapRoute />,
      },
      {
        path: '/flow',
        element: <Flow />,
      },
      {
        path: '/free-draw',
        element: <FreeDraw />,
      },
      {
        path: '/image-to-letter-matching',
        element: <ImageToLetterMatching />,
      },
      {
        path: '/image-to-letter-matching/:characterSet',
        element: <ImageToLetterMatchingRoute />,
      },
      {
        path: '/letter-tracing/:characterSet',
        element: <LetterTracingRoute />,
      },
      {
        path: '/number-keypad',
        element: <NumberKeypad />,
      },
      {
        path: '/place-the-letters',
        element: <PlaceTheLetters />,
      },
      {
        path: '/read-words',
        element: <ReadWords getWordSet={() => ALL_WORDS} />,
      },
      {
        path: '/tap-to-count',
        element: <TapToCount />,
      },
      {
        path: '/type-away',
        element: <TypeAway />,
      },
      {
        path: '/what-do-you-hear',
        element: <WhatDoYouHear />,
      },
      {
        path: '/what-do-you-hear/:uppercase',
        element: <WhatDoYouHearRoute />,
      },
      {
        path: '/memory-cards',
        element: <MemoryCards />,
      },
      {
        path: '/videos/:title',
        element: <AppVideo />,
      },
    ].map((route) => ({
      ...route,
      element: <Layout>{route.element}</Layout>,
    })),
    {}
  );

  return (
    <AppContexts>
      <RouterProvider router={router} />
    </AppContexts>
  );
};
