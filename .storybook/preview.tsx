import '../src/index.css';

import React from 'react';
import type { Preview } from '@storybook/react';
import { withRouter } from '../src/utils/withRouter';
import { withLevels } from '../src/Header/Levels';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withRouter,
    withLevels,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="mfe toddler-games">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
