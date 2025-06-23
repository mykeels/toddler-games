import { getModuleFederationEntry, ModuleFederationEntry } from '@/utils/mfe.utils';
import { AppContexts } from '@/main.app';
import { CreateReadWord } from './CreateReadWord';

const Entry: ModuleFederationEntry<never> = getModuleFederationEntry(() => {
  return (
    <AppContexts>
      <CreateReadWord />
    </AppContexts>
  );
});

export default Entry;
