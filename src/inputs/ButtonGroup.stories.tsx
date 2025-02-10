import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, Button } from "@mui/material";

const meta = {
  title: "Inputs/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Core Functionality
    variant: {
      control: "select",
      options: ["text", "contained", "outlined"],
      description: "Defines the button group's visual style.",
      category: "Core Functionality",
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
      description: "Defines the button group's color theme.",
      category: "Core Functionality",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Sets the button group size.",
      category: "Core Functionality",
    },
    disabled: {
      control: "boolean",
      description: "Disables all buttons in the group.",
      category: "Core Functionality",
    },
    fullWidth: {
      control: "boolean",
      description: "If true, the button group will expand to fill the available width.",
      category: "Core Functionality",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Defines whether the buttons are stacked horizontally or vertically.",
      category: "Layout",
    }
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <ButtonGroup {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );
  },
};

export const Outlined: Story = {
  render: ({ variant, ...props }) => {
    return (
      <ButtonGroup variant={variant} {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );
  },
  args: {
    variant: "outlined",
  },
};

export const Vertical: Story = {
  render: ({ orientation, ...props }) => {
    return (
      <ButtonGroup orientation={orientation} {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );
  },
  args: {
    orientation: "vertical",
  },
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return (
      <ButtonGroup disabled={disabled} {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );
  },
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: ({ fullWidth, ...props }) => {
    return (
      <ButtonGroup fullWidth={fullWidth} {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );
  },
  args: {
    fullWidth: true,
  },
};
