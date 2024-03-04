import type { Meta, StoryObj } from "@storybook/react";
import { Box, LinearProgress } from "@mui/material";

const wrapper = (Story: () => React.JSX.Element) => {
  return (
    <Box sx={{width: 200}}>
      <Story />
    </Box>
  );
};

const meta = {
  title: "Feedback/Progress/LinearProgress",
  component: LinearProgress,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
  },
  decorators: [wrapper],
  argTypes: {
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
    },
  },
  args: {
    color: "primary",
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Indeterminate: Story = {
  render: ({ color, ...props }) => {
    return (
      <LinearProgress color={color} />
    );
  },
  args: {
    color: "primary",
  },
};

export const Determinate: Story = {
  render: ({ color, value, ...props }) => {
    return (
      <LinearProgress variant="determinate" value={value} color={color} />
    );
  },
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100
      },
    },
  },
  args: {
    value: 40,
    color: "primary"
  },
};

export const Buffer: Story = {
  render: ({ value, valueBuffer, ...props }) => {
    return (
      <LinearProgress variant="buffer" value={value} valueBuffer={valueBuffer} />
    );
  },
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100
      },
    },
    valueBuffer: {
      control: {
        type: "number",
        min: 0,
        max: 100
      },
    },
  },
  args: {
    value: 40,
    valueBuffer: 50,
  },
};
