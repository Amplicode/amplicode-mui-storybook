import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeProps } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const meta = {
  title: "DataDisplay/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    variant: {
      control: "select",
      options: ["standard", "dot"],
    },
  },
  tags: ["wrapper"]
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (props: BadgeProps) => {
    return (
      <Badge color="primary" badgeContent={4}>
        <MailIcon />
      </Badge>
    );
  },
};

export const MaxValue: Story = {
  render: (props: BadgeProps) => {
    return (
      <Badge color="primary" badgeContent={101} max={99}>
        <MailIcon />
      </Badge>
    );
  },
};

export const Alignment: Story = {
  render: (props: BadgeProps) => {
    return (
      <Badge
        color="primary"
        badgeContent={4}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MailIcon />
      </Badge>
    );
  },
};
