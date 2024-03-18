import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Button } from "@mui/material";

type CustomAlertArgs = Parameters<typeof Alert>[0] & { text: string; withAction?: boolean; actionText?: string };

const meta: Meta<CustomAlertArgs> = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
  },
  args: {
    variant: "standard",
  }
};

export default meta;

type Story = StoryObj<CustomAlertArgs>;

export const Success: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ variant, text }) => {
    return (
      <Alert
        severity="success"
        variant={variant}
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
  },
};

export const Info: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ variant, text }) => {
    return (
      <Alert
        severity="info"
        variant={variant}
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
  },
};

export const Warning: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ variant, text }) => {
    return (
      <Alert
        severity="warning"
        variant={variant}
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
  },
};

export const Error: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ variant, text }) => {
    return (
      <Alert
        severity="error"
        variant={variant}
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
  },
};

export const Filled: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ text }) => {
    return (
      <Alert
        variant="filled"
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
  },
};

export const Outlined: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ text }) => {
    return (
      <Alert
        variant="outlined"
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
  },
};

export const Basic: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ severity, variant, color, text, ...props }) => {
    return (
      <Alert
        severity={severity}
        variant={variant}
        color={color}
        {...props}
      >
        {text}
      </Alert>
    );
  },
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
    color: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
  },
  args: {
    severity: "success",
    variant: "standard",
    color: "success",
    text: "Here is a gentle message about finished action.",
  },
};

export const WithAction: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ severity, variant, color, text, actionText, ...props }) => {
    return (
      <Alert
        severity={severity}
        variant={variant}
        color={color}
        action={<Button color="inherit" size="small">{actionText}</Button>}
        {...props}
      >
        {text}
      </Alert>
    );
  },
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
    color: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
  },
  args: {
    severity: "success",
    variant: "standard",
    color: "success",
    text: "Here is a gentle message about finished action.",
    actionText: "Undo",
  },
};

export const WithClose: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ severity, variant, color, text, ...props }) => {
    return (
      <Alert
        severity={severity}
        variant={variant}
        color={color}
        onClose={() => {/** */}}
        {...props}
      >
        {text}
      </Alert>
    );
  },
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
    color: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
  },
  args: {
    severity: "success",
    variant: "standard",
    color: "success",
    text: "Here is a gentle message about finished action.",
  },
};

