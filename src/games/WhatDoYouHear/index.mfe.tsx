import { createHashRouter, RouterProvider } from "react-router";
import {
  getModuleFederationEntry,
  ModuleFederationEntry,
} from "@/utils/mfe.utils";
import { WhatDoYouHear } from "./index";
import { AppContexts } from "@/main.app";

const Entry: ModuleFederationEntry<never> = getModuleFederationEntry(() => {
  const router = createHashRouter([
    {
      path: "/",
      element: <WhatDoYouHear standalone />,
    },
  ]);
  return (
    <AppContexts>
      <RouterProvider router={router} />
    </AppContexts>
  );
});

export default Entry;
