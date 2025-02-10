import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Core Functionality
    variant: {
      control: "select",
      options: ["text", "contained", "outlined"],
      description: "Defines the button's visual style.",
      category: "Core Functionality",
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
      description: "Defines the button's color theme.",
      category: "Core Functionality",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Sets the button size.",
      category: "Core Functionality",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button, preventing user interaction.",
      category: "Core Functionality",
    },
    fullWidth: {
      control: "boolean",
      description: "If true, the button will expand to fill the available width.",
      category: "Core Functionality",
    },
    loading: {
      control: "boolean",
      description: "If true, the button will display a loading indicator.",
      category: "Core Functionality",
    },

    // Icon Configuration
    startIcon: {
      control: "select",
      // options: { None: null, Send: <SendIcon />, Alarm: <AlarmOnIcon /> },
      description: "Adds an icon before the button text.",
      category: "Icon Configuration",
    },
    endIcon: {
      control: "select",
      // options: { None: null, Send: <SendIcon />, Alarm: <AlarmOnIcon /> },
      description: "Adds an icon after the button text.",
      category: "Icon Configuration",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <Button {...props}>Button</Button>;
  },
};

export const Outlined: Story = {
  render: ({ variant, ...props }) => {
    return <Button variant={variant} {...props}>Button</Button>;
  },
  args: {
    variant: "outlined",
  },
};

export const TextButton: Story = {
  render: ({ variant, ...props }) => {
    return <Button variant={variant} {...props}>Button</Button>;
  },
  args: {
    variant: "text",
  },
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return <Button disabled={disabled} {...props}>Button</Button>;
  },
  args: {
    disabled: true,
  },
};

export const WithStartIcon: Story = {
  render: ({ startIcon, ...props }) => {
    return <Button startIcon={startIcon} {...props}>Button</Button>;
  },
  args: {
    startIcon: <SendIcon />,
  },
};

export const WithEndIcon: Story = {
  render: ({ endIcon, ...props }) => {
    return <Button endIcon={endIcon} {...props}>Button</Button>;
  },
  args: {
    endIcon: <AlarmOnIcon />,
  },
};

export const FullWidth: Story = {
  render: ({ fullWidth, ...props }) => {
    return <Button fullWidth={fullWidth} {...props}>Full Width</Button>;
  },
  args: {
    fullWidth: true,
  },
};

export const Loading: Story = {
  render: ({ loading, ...props }) => {
    return <Button loading={loading} {...props}>Loading...</Button>;
  },
  args: {
    loading: true,
  },
};