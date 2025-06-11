import { createHashRouter, RouterProvider } from "react-router";
import {
  getModuleFederationEntry,
  ModuleFederationEntry,
} from "@/utils/mfe.utils";
import { WhatDoYouHear } from "./index";
import { AppContexts } from "@/main.app";
import { useState } from "react";
import { getBaseUrl } from "@/utils/url";

const WhenUserIsReady = ({ children }: { children: React.ReactNode }) => {
  const baseUrl = getBaseUrl();
  console.log({ baseUrl });
  const [isReady, setIsReady] = useState(false);
  return (
    <div className="toddler-games">
      {isReady ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center h-[96dvh]">
          <button
            className="bg-brand-primary text-white px-6 py-3 rounded-md border-2 border-white text-2xl"
            onClick={() => setIsReady(true)}
          >
            Begin
          </button>
        </div>
      )}
    </div>
  );
};

const Entry: ModuleFederationEntry<never> = getModuleFederationEntry(() => {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <WhenUserIsReady>
          <WhatDoYouHear standalone />
        </WhenUserIsReady>
      ),
    },
  ]);
  return (
    <AppContexts>
      <RouterProvider router={router} />
    </AppContexts>
  );
});

export default Entry;
