import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch, Box, Typography, FormControlLabel } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Switches toggle the state of a single setting on or off.",
      },
    },
  },
  args: {
    size: "medium",
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "If `true`, the component is checked.",
    },
    defaultChecked: {
      control: "boolean",
      description:
        "The default checked state. Used when the component is not controlled.",
    },
    disabled: {
      control: "boolean",
      description: "If `true`, the switch will be disabled.",
    },
    required: {
      control: "boolean",
      description: "If `true`, the input element is required.",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      description: "The color of the component.",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the switch.",
    },
    edge: {
      control: "select",
      options: [false, "start", "end"],
      description: "If given, adjusts the margin to accommodate positioning.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => {
    return <Switch />;
  },
  parameters: {
    docs: {
      description: {
        story: "Switches toggle the state of a single setting on or off.",
      },
    },
  },
};

export const Labeled: Story = {
  render: () => {
    return (
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Switches toggle the state of a single setting on or off.",
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return (
      <Switch
        checked={checked}
        onChange={handleChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Switches toggle the state of a single setting on or off.",
      },
    },
  },
};
