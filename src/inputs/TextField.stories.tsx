import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, InputAdornment, TextField } from "@mui/material";
import { SendTwoTone } from "@mui/icons-material";

const meta = {
  title: "Inputs/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
    docs: {
      description: {
        component: `Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.`,
      },
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
      control: "text",
    },
    helperText: {
      control: "text",
    },
    defaultValue: {
      control: "text",
    },
  },
  args: {
    variant: "outlined",
    size: "small",
    label: "Owner",
    multiline: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ variant, size, label, multiline, ...props }) => {
    return (
      <TextField
        variant={variant}
        size={size}
        label={label}
        multiline={multiline}
        {...props}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>The <code>TextField</code> wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.</p>`,
      },
    },
  },
};

export const WithAdornment: Story = {
  render: ({ variant, size, label, multiline, ...props }) => {
    return (
      <TextField
          variant={"outlined"}
          size="small"
          placeholder="Placeholder"
          multiline={false}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SendTwoTone />
                </InputAdornment>
              ),
            },
          }}
          {...props}
        />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>T This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.</p>`,
      },
    },
  },
};
