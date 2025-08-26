import type { Meta, StoryObj } from "@storybook/react-vite";
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
      control: "select",
      options: [false, true],
    },
    title: {
      control: "text",
    },
    placement: {
      control: "select",
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
    },
    enterDelay: {
      control: "text"
    },
    leaveDelay: {
      control: "text"
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
    children: <Typography>Show tooltip</Typography>,
  },
};
