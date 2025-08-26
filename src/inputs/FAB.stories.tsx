import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Fab } from "@mui/material";

// TODO: show thats its realy floating component

const wrapper = (Story: () => React.JSX.Element) => {
  return (
    <Box>
      <Story />
    </Box>
  );
};

const meta = {
  title: "Inputs/FloatingActionButton",
  component: Fab,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["options", "renderInput"],
    },
  },
  decorators: [(Story) => wrapper(Story)],
  argTypes: {
    variant: {
      control: "select",
      options: ["extended", "circular"],
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
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ variant, disabled, color, size, ...props }) => {
    return (
      <Fab variant={variant} disabled={disabled} size={size} color={color} {...props}>
        Navigate
      </Fab>
    );
  },
  args: {
    variant: "extended",
    disabled: false,
    color: "primary",
    size: "medium",
  },
};
