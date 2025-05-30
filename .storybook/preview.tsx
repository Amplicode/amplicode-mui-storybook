import type { Preview } from "@storybook/react";
import { withGlobals } from "./decorators/withGlobals";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
    },
    backgrounds: {
      default: "grey",
      values: [
        {
          name: "grey",
          value: "#f5f5f5",
        },
      ],
    },
  },
  decorators: [withGlobals],
  tags: ['autodocs'],
};

export default preview;
