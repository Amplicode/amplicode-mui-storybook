import type { Meta, StoryObj } from "@storybook/react";
import { Box, Paper, styled, Grid, Typography } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";

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
  args: {
    spacing: 2,
  },
  tags: ["wrapper"],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Item: Story = {
  render: ({ ...props }) => {
    return (
      <Grid item xs={3}>
        <GenerationInstructions.Exclude>
          <Paper>
            <Typography variant="body1" textAlign={"center"} p={2}>
              Component to wrap with Grid item
            </Typography>
          </Paper>
        </GenerationInstructions.Exclude>
      </Grid>
    );
  },
  decorators: [
    (Story) => {
      const gridItems = new Array(10).fill(1).map((_, index) => index + 1);
      return (
        <Grid container spacing={2}>
          {gridItems.map(() => {
            return Story();
          })}
        </Grid>
      );
    },
  ],
};
