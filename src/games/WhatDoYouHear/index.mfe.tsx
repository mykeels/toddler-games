import { createHashRouter, RouterProvider } from 'react-router';
import { getModuleFederationEntry, ModuleFederationEntry } from '@/utils/mfe.utils';
import { WhatDoYouHear } from './index';
import { AppContexts } from '@/main.app';
import { WhenUserIsReady } from '@/WhenUserIsReady';

const Entry: ModuleFederationEntry<never> = getModuleFederationEntry(() => {
  const router = createHashRouter([
    {
      path: '/',
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
