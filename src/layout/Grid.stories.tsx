import type { Meta, StoryObj } from "@storybook/react";
import { Box, Paper, styled, Grid } from "@mui/material";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["divider"],
    },
  },
  decorators: [(Story) => <Box width={500}>{Story()}</Box>],
  argTypes: {
    spacing: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    rowSpacing: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    columnSpacing: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    columns: {
      control: "select",
      options: [7, 12, 16, 20, 24],
    },
  },
  tags: ["wrapper"],
  args: {
    spacing: 2,
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ ...props }) => {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
      }),
    }));

    return (
      <Grid container {...props}>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>xs=9</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    );
  },
};
