import { Box, Button, Fade, Grow, Slide, Zoom } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/client-api';

const wrapper = (Story: any, context: any) => {
  const [{ in: fadeIn }, updateArgs] = useArgs();
  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onClick={() => {
        updateArgs({ in: !fadeIn })
      }} sx={{ mb: 2 }}>
        Toggle
      </Button>
      <Story />
    </Box>
  );
};

const meta = {
  title: "Utils/Transitions",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Material UI provides simple wrapper components for CSS transitions. 
                    They help you animate the appearance and disappearance of elements with a consistent API.
                    For more details, see: https://mui.com/material-ui/transitions/
        `,
      },
    },
  },
  decorators: [wrapper],
  argTypes: {
    open: {
      control: "boolean",
    },
    timeout: {
      control: { type: "number" },
    },
    direction: {
      control: { type: "select" },
      options: ["left", "right", "up", "down"],
    },
  },
  tags: ["wrapper"],
} satisfies Meta;

export default meta;
type Story = StoryObj<{
  in: boolean;
  timeout: number;
  direction?: "right" | "left" | "up" | "down";
}>;

export const FadeStory: Story = {
  render: ({ ...props }) => {
    return (
      <Fade {...props}>
        <Box
          sx={{
            width: 100,
            height: 100,
            bgcolor: "primary.main",
            borderRadius: 2,
          }}
        />
      </Fade>
    );
  },
  name: "Fade",
  parameters: {
    docs: {
      description: {
        story:
          "Fade applies a fade-in and fade-out effect to its children using opacity transitions.",
      },
    },
  },
  args: {
    in: true,
    timeout: 500,
  },
};

export const GrowStory: Story = {
  render: ({ ...props }) => (
      <Grow {...props}>
        <Box
          sx={{
            width: 100,
            height: 100,
            bgcolor: "secondary.main",
            borderRadius: 2,
          }}
        />
      </Grow>
  ),
  name: "Grow",
  parameters: {
    docs: {
      description: {
        story:
          "Grow scales the child from 0% to 100% of its size and reverses the animation on exit.",
      },
    },
  },
};

export const SlideStory: Story = {
  render: ({ ...props }) => (
      <Slide {...props}>
        <Box
          sx={{
            width: 100,
            height: 100,
            bgcolor: "success.main",
            borderRadius: 2,
          }}
        />
      </Slide>
  ),
  name: "Slide",
  args: {
    direction: "up",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Slide moves the child element into or out of the screen in the specified direction.",
      },
    },
  },
};

export const ZoomStory: Story = {
  render: ({ ...props }) => (
    <Zoom {...props}>
      <Box
        sx={{
          width: 100,
          height: 100,
          bgcolor: "error.main",
          borderRadius: 2,
        }}
      />
    </Zoom>
  ),
  name: "Zoom",
  parameters: {
    docs: {
      description: {
        story:
          "Zoom expands or contracts the child from its center point, creating a zoom effect.",
      },
    },
  },
};
