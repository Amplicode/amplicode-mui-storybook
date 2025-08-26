import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@mui/material";

const meta = {
  title: "DataDisplay/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ['onDelete']
    },
  },
  decorators: [],
  argTypes: {
    label: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["outlined", "filled"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
  },
  args: {
    variant: "filled",
    label: 'Chip Info',
    size: "medium",
    color: "primary",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ variant, size, color, label }) => {
    return <Chip variant={variant} size={size} color={color} label={label} />;
  },
};

export const WithDelete: Story = {
  render: ({ variant, size, color, label, ...props }) => {
    return <Chip variant={variant} size={size} color={color} label={label} onDelete={() => {}} {...props} />;
  },
};
