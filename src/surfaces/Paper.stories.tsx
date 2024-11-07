import { Box, Paper } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const wrapper = (Story: () => React.JSX.Element) => {
  return (
    <Box sx={{ width: 200, height: 200 }}>
      <Story />
    </Box>
  );
};

const meta = {
  title: "Surfaces/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["onClick"],
    },
  },
  decorators: [wrapper],
  argTypes: {
    elevation: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    variant: {
      control: "select",
      options: ["elevation", "outlined"],
    },
  },
  args: {},
  tags: ['wrapper']
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevation: Story = {
  render: ({ elevation, ...props }) => {
    return (
      <Paper
        sx={{ width: "100%", height: "100%", m: 1 }}
        elevation={elevation}
      ></Paper>
    );
  },
  args: {
    elevation: 1,
  },
};

export const Outlined: Story = {
  render: ({ elevation, ...props }) => {
    return (
      <Paper
        sx={{ width: "100%", height: "100%", m: 1 }}
        variant="outlined"
      ></Paper>
    );
  },
  args: {},
};
