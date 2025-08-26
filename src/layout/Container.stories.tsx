import type { Meta, StoryObj } from "@storybook/react-vite";
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
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    fixed: {
      control: "boolean",
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
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", p: 2 }}>
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
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", p: 2 }}>
          Responsive container. The max-width matches the min-width of the current breakpoint.
        </Box>
      </Container>
    );
  },
};
