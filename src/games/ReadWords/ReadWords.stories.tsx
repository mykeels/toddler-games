import { ALL_WORDS } from '@/utils/words';
import ReadWords from './index';
import { useState } from 'react';

export default {
  title: 'Games/ReadWords',
  component: ReadWords,
};

export const AllWords = () => <ReadWords />;

export const Level2Letters = () => <ReadWords level={2} />;

export const Level3Letters = () => <ReadWords level={3} />;

export const Level4Letters = () => <ReadWords level={4} />;

export const Level5Letters = () => <ReadWords level={5} />;

export const Level6Letters = () => <ReadWords level={6} />;

export const TwinWords = () => (
  <ReadWords
    getWordSet={() => [
      // {
      //   value: "house",
      //   pronunciation: "hauss",
      //   image:
      //     "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // },
      {
        value: 'apple',
        pronunciation: 'appll',
        image:
          'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        value: 'itchy',
        pronunciation: 'ičččy',
        image: '',
      },
    ]}
  />
);

export const SelectWord = () => {
  const [selectedWord, setSelectedWord] = useState<string>('you');
  return (
    <div className="flex flex-col gap-1 bg-brand-primary p-1">
      <select
        className="bg-brand-secondary text-brand-primary p-1 rounded-md"
        value={selectedWord}
        onChange={(e) => setSelectedWord(e.target.value)}
      >
        {Object.values(ALL_WORDS).map((word) => (
          <option key={word.value} value={word.value}>
            {word.value}
          </option>
        ))}
      </select>
      <ReadWords key={selectedWord} getWordSet={() => [...ALL_WORDS.filter((word) => word.value === selectedWord)]} />
    </div>
  );
};

export const Standalone = () => <ReadWords standalone />;
