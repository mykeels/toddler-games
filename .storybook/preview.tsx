import "../src/index.css";

import React from "react";
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
  decorators: [
    withRouter,
    withLevels,
    (Story) => (
      <div className="mfe toddler-games">
        <Story />
      </div>
    ),
  ],
};

export default preview;
