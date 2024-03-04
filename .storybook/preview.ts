import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      // expanded: true,
    },
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'grey',
          value: '#f5f5f5',
        },
      ],
    },
  },
};

export default preview;
