import LetterKeypad from '.';

export default {
  title: 'Games/LetterKeypad',
  component: LetterKeypad,
};

export const Letter = () => <LetterKeypad />;

export const Phonics = () => <LetterKeypad shouldPlayPhonics />;
