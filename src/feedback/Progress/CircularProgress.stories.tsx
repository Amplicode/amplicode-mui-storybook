import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@mui/material";

const meta = {
  title: "Feedback/Progress/CircularProgress",
  component: CircularProgress,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
  },
  decorators: [],
  argTypes: {
    color: {
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
    },
    size: {
      control: "text",
    },
  },
  args: {
    color: "primary",
    size: 40,
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Indeterminate: Story = {
  render: ({ size, color, ...props }) => {
    return <CircularProgress size={size} color={color} />;
  },
};

export const Determinate: Story = {
  render: ({ size, color, value, ...props }) => {
    return (
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        color={color}
      />
    );
  },
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
  },
  args: {
    value: 40,
  },
};
