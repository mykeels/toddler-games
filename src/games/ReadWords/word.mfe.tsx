import { getModuleFederationEntry, ModuleFederationEntry } from '@/utils/mfe.utils';
import { ReadWord } from './index';
import { AppContexts } from '@/main.app';

type ReadWordProps = {
  goal: { value: string; pronunciation?: string };
};

const Entry: ModuleFederationEntry<ReadWordProps> = getModuleFederationEntry(({ mountProps }) => {
  return (
    <AppContexts>
      <ReadWord goal={mountProps.goal} standalone />
    </AppContexts>
  );
});

export default Entry;
