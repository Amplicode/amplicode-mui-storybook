import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";

const meta = {
  id: "data-display-typography",
  title: "Data Display/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "overline",
      ],
    },
  },
  args: {
    variant: "h6",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: ({ variant, ...props }) => {
    return (
      <Typography variant={variant} {...props}>
        Text
      </Typography>
    );
  },
};
