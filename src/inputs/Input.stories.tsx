import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputBase } from "@mui/material";

const meta = {
  title: "Inputs/Input",
  component: InputBase,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
  },
  decorators: [],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    error: false,
    size: "small",
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof InputBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ size, defaultValue, placeholder, error, ...props }) => {
    return (
      <InputBase
        size={size}
        placeholder={placeholder}
        {...props}
      />
    );
  },
};
