import "../src/index.css";

import type { Preview } from "@storybook/react";
import { withRouter } from "../src/utils/withRouter";
import { withLevels } from "../src/Header/Levels";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter, withLevels],
};

export default preview;
