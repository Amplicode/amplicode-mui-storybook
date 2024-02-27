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
    withAction: {
      control: "boolean",
    },
    actionText: {
      control: "text",
      if: { arg: "withAction", truthy: true },
    },
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
  },
};

export default meta;

type Story = StoryObj<CustomAlertArgs>;

export const Basic: Story & {
  args: CustomAlertArgs;
} = {
  render: ({ severity, variant, defaultValue, color, text, icon, withAction, action, actionText, ...props }) => {
    return (
      <Alert
        severity={severity}
        variant={variant}
        defaultValue={defaultValue}
        color={color}
        action={
          withAction && (
            <Button color="inherit" size="small">
              {actionText}
            </Button>
          )
        }
        {...props}
      >
        {text}
      </Alert>
    );
  },
  args: {
    text: "Here is a gentle message about finished action.",
    customIcon: false,
    withAction: false,
    actionText: "Undo",
  },
};
