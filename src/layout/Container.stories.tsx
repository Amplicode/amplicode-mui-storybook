import type { Meta, StoryObj } from "@storybook/react";
import { Box, Paper, styled, Container } from "@mui/material";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["divider"],
    },
  },
  decorators: [(Story) => <Box width={500}>{Story()}</Box>],
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    fixed: {
      control: "select",
      options: [false, true],
    },
  },
  tags: ["wrapper"],
  args: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fluid: Story = {
  render: ({ ...props }) => {
    return (
      <Container maxWidth={"lg"} {...props}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          A fluid container width is bounded by the maxWidth prop value.
        </Box>
      </Container>
    );
  },
};

export const Fixed: Story = {
  render: ({ ...props }) => {
    return (
      <Container fixed {...props}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    );
  },
};
