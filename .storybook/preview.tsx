import type { Preview } from "@storybook/react-vite";
import { withStudioDndListener } from "./decorators/withStudioDndListener";
import { withDraggable } from "./decorators/withDraggable";

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
  decorators: [
    withStudioDndListener,
    withDraggable,
    (Story) => {
      return (
        <div>
          <span id="asDragImage" style={{position: "absolute", top: -10000}}></span>
          {Story()}
        </div>
      )
    }
  ],
  tags: ['autodocs'],
};

export default preview;
