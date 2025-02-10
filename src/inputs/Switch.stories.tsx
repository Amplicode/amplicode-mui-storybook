import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Typography, Box, styled } from "@mui/material";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Switch component allows users to toggle between two states.
        </Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    checked: {
      control: "boolean",
      description: "If true, the switch is checked.",
      category: "State",
    },
    defaultChecked: {
      control: "boolean",
      description: "The default checked state of the switch.",
      category: "State",
    },
    disabled: {
      control: "boolean",
      description: "If true, the switch is disabled.",
      category: "Behavior",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      description: "The color of the switch.",
      category: "Appearance",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the switch.",
      category: "Appearance",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the state is changed.",
      category: "Events",
    },
    inputProps: {
      control: "object",
      description: "Attributes applied to the input element.",
      category: "Advanced",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <Switch {...props} />;
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Default switch with no additional properties.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Checked: Story = {
  render: ({ checked, ...props }) => {
    return <Switch checked={checked} {...props} />;
  },
  args: {
    checked: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Switch in checked state.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return <Switch disabled={disabled} {...props} />;
  },
  args: {
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Disabled switch that cannot be toggled.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Colors: Story = {
  render: ({ color, ...props }) => {
    return <Switch color={color} {...props} />;
  },
  args: {
    color: "primary",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Switch with different color variants.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: ({ size, ...props }) => {
    return <Switch size={size} {...props} />;
  },
  args: {
    size: "small",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Small-sized switch.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};
