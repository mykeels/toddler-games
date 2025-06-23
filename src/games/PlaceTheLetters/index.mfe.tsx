import { createHashRouter, RouterProvider } from 'react-router';
import { getModuleFederationEntry, ModuleFederationEntry } from '@/utils/mfe.utils';
import { PlaceTheLetters } from './index';
import { AppContexts } from '@/main.app';
import { WhenUserIsReady } from '@/WhenUserIsReady';

const Entry: ModuleFederationEntry<never> = getModuleFederationEntry(() => {
  const router = createHashRouter([
    {
      path: '/',
      element: (
        <WhenUserIsReady>
          <PlaceTheLetters standalone />
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
