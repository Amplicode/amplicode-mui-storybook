import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@mui/material";

const meta = {
  title: "Inputs/Radio/RadioButton",
  component: Radio,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  argTypes: {
    checked: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
  },
  args: {
    checked: false,
    size: "medium",
    color: "primary",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: ({ checked, size, color }) => {
    return <Radio checked={checked} onChange={() => {}} size={size} color={color} value="radio" name="radio-buttons" />;
  },
};
