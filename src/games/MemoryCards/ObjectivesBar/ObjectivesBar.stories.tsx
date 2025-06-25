import { ObjectivesBar } from '.';

export default {
  title: 'games/MemoryCards/ObjectivesBar',
  component: ObjectivesBar,
};

export const Index = () => (
  <ObjectivesBar
    objectives={[
      {
        character: {
          value: '🐮',
        },
        total: 4,
        flipped: 0,
      },
      {
        character: {
          value: '🐶',
        },
        total: 4,
        flipped: 0,
      },
      {
        character: {
          value: '🍎',
        },
        total: 4,
        flipped: 0,
      },
      {
        character: {
          value: '🍌',
        },
        total: 4,
        flipped: 0,
      },
    ]}
  />
);
