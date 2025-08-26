import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Button } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { useState } from "react";

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
    severity: {
      control: "select",
      options: ['success', 'info', 'warning', 'error'],
    },
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

export const Success: Story = {
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

export const Info: Story = {
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

export const Warning: Story = {
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

export const Error: Story = {
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

export const Filled: Story = {
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

export const Outlined: Story = {
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

export const Basic: Story = {
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

export const WithAction: Story = {
  render: ({ severity, variant, color, text, actionText, ...props }) => {
    function alertAction() {
        // userAction
    }

    return (
      <Alert
        severity={severity}
        variant={variant}
        color={color}
        action={<Button color="inherit" size="small" onClick={alertAction}>{actionText}</Button>}
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

export const WithClose: Story = {
  render: ({ severity, variant, color, text, ...props }) => {

    const [showAlert, setShowAlert] = useState(true);

    function closeHandler() {
      // user actions
      setShowAlert(false);
    }

    return (
        <>
            <GenerationInstructions.InsertOnly>
                {showAlert && <Alert
                    severity={severity}
                    variant={variant}
                    color={color}
                    onClose={closeHandler}
                    {...props}
                >
                    {text}
                </Alert>}
            </GenerationInstructions.InsertOnly>

            {!showAlert && <Button onClick={() => {
                setShowAlert(true);
            }}>Show alert</Button>}
        </>
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

