import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["icon", "checkedIcon", "checked"],
    },
  },
  decorators: [],
  argTypes: {
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    defaultChecked: true,
    disabled: false,
    color: "primary",
    size: "medium",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ ...props }) => {
    return (
      <Checkbox {...props} />
    );
  },
};

export const CustomIcon: Story = {
  render: ({ ...props }) => {
    return (
      <Checkbox icon={<></>} checkedIcon={<></>} {...props} />
    );
  },
  args: {
    defaultChecked: false,
    icon: <FavoriteBorder />,
    checkedIcon: <Favorite />
  }
};

export const Label: Story = {
  render: ({ checked, ...props }) => {
    return (
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    );
  },
};

export const Controlled: Story = {
  render: ({ checked, ...props }) => {
    return (
      <Checkbox checked={checked} onChange={() => {}} {...props} />
    );
  },
  args: {
    checked: true,
  }
};
