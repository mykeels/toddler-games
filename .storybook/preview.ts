import "../src/index.css";

import type { Preview } from "@storybook/react";
import { withRouter } from "../src/utils/withRouter";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter],
};

export default preview;
