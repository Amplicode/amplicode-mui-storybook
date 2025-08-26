import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["divider"],
    },
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250, p: 2 }}>
          <Story />
        </Paper>
      );
    },
  ],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    alignItems: {
      control: "select",
      options: [
        "baseline",
        "normal",
        "stretch",
        "center",
        "flex-end",
        "flex-start",
      ],
    },
    justifyContent: {
      control: "select",
      options: [
        "baseline",
        "normal",
        "stretch",
        "center",
        "flex-end",
        "flex-start",
        "space-around",
        "space-between",
        "space-evenly",
      ],
    },
    spacing: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    useFlexGap: {
      control: "boolean"
    },
  },
  tags: ["wrapper"],
  args: {
    direction: "column",
    spacing: 2,
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} alignItems={"center"}>
        <Paper sx={{ p: 2 }}>Item 1</Paper>
        <Paper sx={{ p: 2 }}>Item 2</Paper>
        <Paper sx={{ p: 2 }}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
  },
};

export const Vertical: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        <Paper sx={{ p: 2 }}>Item 1</Paper>
        <Paper sx={{ p: 2 }}>Item 2</Paper>
        <Paper sx={{ p: 2 }}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "column",
  },
};

export const HorizontalDivided: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </Stack>
    );
  },
  args: {
    direction: "row",
    divider: <Divider orientation="vertical" flexItem />,
  },
};

export const VerticalDivided: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </Stack>
    );
  },
  args: {
    direction: "column",
    divider: <Divider orientation="horizontal" flexItem />,
  },
};

export const Wrap: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} useFlexGap flexWrap="wrap">
        <Paper sx={{ p: 2 }}>Item 1</Paper>
        <Paper sx={{ p: 2 }}>Item 2</Paper>
        <Paper sx={{ p: 2 }}>Loong content</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 200 }}>
          <Story />
        </Box>
      );
    },
  ],
};

export const WrapFillWidth: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} useFlexGap flexWrap="wrap">
        {/* flex: 1 is important for an item to fill all space in the stream */}
        <Paper sx={{ p: 2, flex: 1 }}>Item 1</Paper>
        <Paper sx={{ p: 2, flex: 1 }}>Item 2</Paper>
        <Paper sx={{ p: 2, flex: 1 }}>Loong content</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 200 }}>
          <Story />
        </Box>
      );
    },
  ],
};

export const Truncated: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        <Typography noWrap>Item 1</Typography>
        <Typography noWrap>Item 2</Typography>
        <Typography noWrap>Loong content</Typography>
      </Stack>
    );
  },
  args: {
    direction: "column",
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 100 }}>
          <Story />
        </Box>
      );
    },
  ],
};
