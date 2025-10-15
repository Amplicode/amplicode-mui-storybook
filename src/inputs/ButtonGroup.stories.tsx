import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonGroup } from "@mui/material";

const meta = {
  title: "Inputs/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
  },
  decorators: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
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
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    orientation: "horizontal",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ ...props }) => {
    return (
      <ButtonGroup {...props}>
        {/* Exclude */}
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        {/* Exclude */}
      </ButtonGroup>
    );
  },
};
