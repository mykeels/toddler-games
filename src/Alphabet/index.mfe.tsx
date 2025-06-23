import { getModuleFederationEntry, ModuleFederationEntry } from '@/utils/mfe.utils';
import { Alphabet } from './index';
import { AppContexts } from '@/main.app';

type CharacterSet = 'classic-phonics' | 'special-phonics' | 'special-phonics-vowels' | 'special-phonics-consonants';

type AlphabetProps = {
  set: CharacterSet;
};

const Entry: ModuleFederationEntry<AlphabetProps> = getModuleFederationEntry(({ mountProps: { set } }) => {
  return (
    <AppContexts>
      {set === 'classic-phonics' && <Alphabet.ClassicPhonics />}
      {set === 'special-phonics' && <Alphabet.SpecialPhonics />}
      {set === 'special-phonics-vowels' && <Alphabet.SpecialPhonicVowels />}
      {set === 'special-phonics-consonants' && <Alphabet.SpecialPhonicConsonants />}
    </AppContexts>
  );
});

export default Entry;
