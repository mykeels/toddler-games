import { Alphabet } from './index';

export default {
  title: 'components/Alphabet',
  component: Alphabet,
};

export const Index = () => <Alphabet />;

export const ClassicPhonics = () => <Alphabet.ClassicPhonics />;

export const SpecialPhonics = () => <Alphabet.SpecialPhonics />;
