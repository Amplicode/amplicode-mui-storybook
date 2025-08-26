import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, TextField } from "@mui/material";

const meta = {
  title: "Inputs/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
  },
  decorators: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
    },
    disabled: {
      control: "select",
      options: [false, true],
    },
    multiline: {
      control: "select",
      options: [false, true],
    },
    fullWidth: {
      control: "select",
      options: [false, true],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text"
    },
    helperText: {
      control: "text"
    },
    defaultValue: {
      control: "text"
    }
  },
  args: {
    variant: "outlined",
    disabled: false,
    size: "small",
    label: "Owner",
    multiline: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ variant, size, disabled, label, multiline, ...props }) => {
    return (
      <TextField variant={variant} size={size} disabled={disabled} label={label} multiline={multiline} {...props} />
    );
  },
};
