import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, FormControlLabel } from "@mui/material";

const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Core Functionality
    checked: {
      control: "boolean",
      description: "If true, the checkbox is checked.",
      category: "Core Functionality",
    },
    defaultChecked: {
      control: "boolean",
      description: "If true, the checkbox is initially checked.",
      category: "Core Functionality",
    },
    disabled: {
      control: "boolean",
      description: "If true, the checkbox is disabled.",
      category: "Core Functionality",
    },
    required: {
      control: "boolean",
      description: "If true, the checkbox input is required.",
      category: "Core Functionality",
    },
    indeterminate: {
      control: "boolean",
      description: "If true, the checkbox appears in an indeterminate state.",
      category: "Core Functionality",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
      description: "Defines the checkbox color.",
      category: "Appearance",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "Defines the checkbox size.",
      category: "Appearance",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the state is changed.",
      category: "Events",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <FormControlLabel
        control={<Checkbox {...props} />}
        label="Default Checkbox"
      />
    );
  },
};

export const Checked: Story = {
  render: ({ checked, ...props }) => {
    return (
      <FormControlLabel
        control={<Checkbox checked={checked} {...props} />}
        label="Checked Checkbox"
      />
    );
  },
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return (
      <FormControlLabel
        control={<Checkbox disabled={disabled} {...props} />}
        label="Disabled Checkbox"
      />
    );
  },
  args: {
    disabled: true,
  },
};

export const Indeterminate: Story = {
  render: ({ indeterminate, ...props }) => {
    return (
      <FormControlLabel
        control={<Checkbox indeterminate={indeterminate} {...props} />}
        label="Indeterminate Checkbox"
      />
    );
  },
  args: {
    indeterminate: true,
  },
};

export const ColorPrimary: Story = {
  render: ({ color, ...props }) => {
    return (
      <FormControlLabel
        control={<Checkbox color={color} {...props} />}
        label="Primary Checkbox"
      />
    );
  },
  args: {
    color: "primary",
  },
};
