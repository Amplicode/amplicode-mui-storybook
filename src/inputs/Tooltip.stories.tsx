import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Typography } from "@mui/material";

const meta = {
  title: "Inputs/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["children"],
    },
  },
  decorators: [],
  argTypes: {
    arrow: {
      type: "boolean",
    }
  },
  args: {
    title: "Add",
    arrow: true,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ title, children, arrow, ...props }) => {
    return (
      <Tooltip title={title} arrow={arrow}>
        {children}
      </Tooltip>
    );
  },
  args: {
    children: <Typography>Show tooltip</Typography>
  }
};
