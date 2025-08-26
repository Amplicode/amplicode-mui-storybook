import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";

const meta = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["divider"],
    },
  },
  tags: ["wrapper", "morph"],
  argTypes: {
    height: {
      control: 'number',
    },
    width: {
      control: 'number',
    }
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <Box {...props}></Box>;
  },
  decorators: [
    (Story) => (
      <Box>
        Basic universal mui container with all available system properties. Used
        as an extended "div" element.
        {Story()}
      </Box>
    ),
  ],
};

export const WithThemeProperty: Story = {
  render: ({ ...props }) => {
    return (
      <Box {...props} sx={{ background: "action.disabledBackground" }}></Box>
    );
  },
  decorators: [
    (Story) => (
      <Box>
        Basic universal mui container with all available system properties. Used
        as an extended "div" element.
        {Story()}
      </Box>
    ),
  ],
};

export const Absolute: Story = {
  render: ({ ...props }) => {
    return (
      <Box {...props} sx={{ position: "absolute", top: 30, left: 30 }}>
        Box content
      </Box>
    );
  },
  decorators: [
    (Story) => (
      <Box width={200} height={200} bgcolor={"#eee"} position={"relative"}>
        Static content {Story()}
      </Box>
    ),
  ],
};

export const AbsoluteCentered: Story = {
  render: ({ ...props }) => {
    return (
      <Box
        {...props}
        sx={{
          width: "30px",
          height: "30px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          background: "#aaa",
        }}
      >
        
      </Box>
    );
  },
  decorators: [
    (Story) => (
      <Box width={200} height={200} bgcolor={"#eee"} position={"relative"}>
        Static content {Story()}
      </Box>
    ),
  ],
  tags: ['wrapper']
};
