import type { Meta, StoryObj } from "@storybook/react";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ['divider']
    },
  },
  decorators: [],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"]
    },
    spacing: {
      control: {
        type: "number",
        step: 1,
      },
    },
  },
  tags: ['wrapper'],
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
      <Stack {...props}>
        <Paper sx={{ p: 2 }}>Item 1</Paper>
        <Paper sx={{ p: 2 }}>Item 2</Paper>
        <Paper sx={{ p: 2 }}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row"
  }
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
  }
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
  }
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
  }
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
      )
    }
  ]
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
      )
    }
  ]
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
      )
    }
  ]
};

export const VerticalStart: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    alignItems: "start"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const VerticalCenter: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    alignItems: "center",
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const VerticalEnd: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    alignItems: "end"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const VerticalStretch: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    alignItems: "stretch"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const HorizontalStart: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    justifyContent: "start",
    alignItems: "center"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const HorizontalCenter: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const HorizontalEnd: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    justifyContent: "end",
    alignItems: "center"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const HorizontalSpaceBetween: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

export const HorizontalSpaceAround: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} height={250}>
        <Paper sx={{p: 2}}>Item 1</Paper>
        <Paper sx={{p: 2}}>Item 2</Paper>
        <Paper sx={{p: 2}}>Item 3</Paper>
      </Stack>
    );
  },
  args: {
    direction: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250 }}>
          <Story />
        </Paper>
      )
    }
  ]
};

// export const Basic: Story = {
//   render: ({ direction, divider, ...props }) => {
//     return (
//       <Stack direction={direction} divider={divider} {...props}>
//         <Typography>Item 1</Typography>
//         <Typography>Item 2</Typography>
//         <Typography>Item 3</Typography>
//       </Stack>
//     );
//   },
// };
