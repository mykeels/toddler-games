import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { LevelContextProvider } from "./Header/Levels";
import { Splash } from "./Splash";
import { Home } from "./GameListing";
import { FindAndTapRoute } from "./games/FindAndTap/route";
import NumberKeypad from "./games/NumberKeypad";
import Flow from "./games/Flow";
import FreeDraw from "./games/FreeDraw";
import { ImageToLetterMatchingRoute } from "./games/ImageToLetterMatching/route";
import ImageToLetterMatching from "./games/ImageToLetterMatching";
import PlaceTheLetters from "./games/PlaceTheLetters";
import { LetterTracingRoute } from "./games/LetterTracing/route";
import ReadWords from "./games/ReadWords";
import TapToCount from "./games/TapToCount";
import TypeAway from "./games/TypeAway";
import WhatDoYouHear from "./games/WhatDoYouHear";
import { WhatDoYouHearRoute } from "./games/WhatDoYouHear/route";

// Create a new router instance
const router = createHashRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/menu",
    element: <Home />,
  },
  {
    path: "/find-and-tap/:characterSet",
    element: <FindAndTapRoute />,
  },
  {
    path: "/flow",
    element: <Flow />,
  },
  {
    path: "/free-draw",
    element: <FreeDraw />,
  },
  {
    path: "/image-to-letter-matching",
    element: <ImageToLetterMatching />,
  },
  {
    path: "/image-to-letter-matching/:characterSet",
    element: <ImageToLetterMatchingRoute />,
  },
  {
    path: "/letter-tracing/:characterSet",
    element: <LetterTracingRoute />,
  },
  {
    path: "/number-keypad",
    element: <NumberKeypad />,
  },
  {
    path: "/place-the-letters",
    element: <PlaceTheLetters />,
  },
  {
    path: "/read-words",
    element: <ReadWords />,
  },
  {
    path: "/tap-to-count",
    element: <TapToCount />,
  },
  {
    path: "/type-away",
    element: <TypeAway />,
  },
  {
    path: "/what-do-you-hear",
    element: <WhatDoYouHear />,
  },
  {
    path: "/what-do-you-hear/:uppercase",
    element: <WhatDoYouHearRoute />,
  },
]);

// eslint-disable-next-line react-refresh/only-export-components
const RenderMode = ({ children }: { children: React.ReactNode }) => {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? <StrictMode>{children}</StrictMode> : children;
};

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <RenderMode>
      <QueryClientProvider client={queryClient}>
        <LevelContextProvider>
          <RouterProvider router={router} />
        </LevelContextProvider>
      </QueryClientProvider>
    </RenderMode>
  );
}
