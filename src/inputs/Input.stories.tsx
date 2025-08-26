import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@mui/material";

const meta = {
  title: "Inputs/Input",
  component: Input,
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
    disabled: false,
    error: false,
    size: "small",
    defaultValue: "Owner",
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ size, disabled, defaultValue, placeholder, error, ...props }) => {
    return (
      <Input
        size={size}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        error={error}
        {...props}
      />
    );
  },
};
