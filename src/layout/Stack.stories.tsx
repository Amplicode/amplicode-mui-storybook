import type { Meta, StoryObj } from "@storybook/react";
import { Divider, Stack, Typography } from "@mui/material";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
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
    divider: {
      options: ['Horizontal', 'Vertical'],
      mapping: {
        Horizontal: <Divider orientation="horizontal" flexItem />,
        Vertical: <Divider orientation="vertical" flexItem />,
      },
      control: {
        type: "select",
      }
    }
  },
  args: {
    direction: "column",
    spacing: 2,
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: ({ direction, divider, ...props }) => {
    return (
      <Stack direction={direction} divider={divider} {...props}>
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </Stack>
    );
  },
};
