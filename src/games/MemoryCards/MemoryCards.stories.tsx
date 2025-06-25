import { MemoryCards } from './index';

export default {
  title: 'games/MemoryCards',
  component: MemoryCards,
};

export const Index = () => <MemoryCards />;

export const Level1 = () => <MemoryCards level={1} />;
export const Level2 = () => <MemoryCards level={2} />;
export const Level3 = () => <MemoryCards level={3} />;
export const Level4 = () => <MemoryCards level={4} />;
export const Level5 = () => <MemoryCards level={5} />;
