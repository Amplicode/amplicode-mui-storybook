import type { Meta, StoryObj } from "@storybook/react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import {
  GenerationInstructions,
  replaceOnGenerate,
} from "@amplicode/storybook-extensions";

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
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullStatic: Story = {
  render: ({ ...props }) => {
    return (
      <Grid container {...props}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <GenerationInstructions.Exclude>
            <Paper>
              <Typography variant="body1" textAlign={"center"} p={2}>
                Item 1
              </Typography>
            </Paper>
          </GenerationInstructions.Exclude>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <GenerationInstructions.Exclude>
            <Paper>
              <Typography variant="body1" textAlign={"center"} p={2}>
                Item 2
              </Typography>
            </Paper>
          </GenerationInstructions.Exclude>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <GenerationInstructions.Exclude>
            <Paper>
              <Typography variant="body1" textAlign={"center"} p={2}>
                Item 3
              </Typography>
            </Paper>
          </GenerationInstructions.Exclude>
        </Grid>
      </Grid>
    );
  },
};

export const FullLoop: Story = {
  render: ({ ...props }) => {
    return (
      <Grid container {...props}>
        {replaceOnGenerate(
          new Array(10).fill(1).map((_, index) => index + 1),
          []
        ).map((gridItem) => {
          return (
            <Grid size={{ xs: 12, lg: 3 }}>
              <GenerationInstructions.Exclude>
                <Paper>
                  <Typography variant="body1" textAlign={"center"} p={2}>
                    Item {gridItem}
                  </Typography>
                </Paper>
              </GenerationInstructions.Exclude>
            </Grid>
          );
        })}
      </Grid>
    );
  },
};
