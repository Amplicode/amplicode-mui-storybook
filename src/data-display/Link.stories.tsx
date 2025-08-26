import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Paper, Link } from "@mui/material";

const meta = {
  title: "DataDisplay/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Link href="#">Basic link component</Link>;
  },
};
