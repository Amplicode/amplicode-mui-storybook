import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Paper, Grid, Typography, styled } from "@mui/material";
import {
  GenerationInstructions,
  replaceOnGenerate,
} from "@amplicode/storybook-extensions";
import { StyledContent } from "./components/StyledContent";
import { StyledBox } from "./components/StyledBox";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    // layout: "centered",
    controls: {
      exclude: ["divider"],
    },
    docs: {
      description: {
        component: `<p>The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</p><p>The <code>Grid</code> component works well for a layout with a known number of columns. The columns can be configured with multiple breakpoints to specify the column span of each child.</p><p>The <code>Grid</code> component is a layout grid, not a data grid. If you need a data grid, check out the MUI X <code>DataGrid</code> component.</p>`,
      },
    },
  },
  decorators: [(Story) => <Box width={"100%"}>{Story()}</Box>],
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
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body1" textAlign={"center"}>
                Item1
              </Typography>
            </StyledBox>
          </GenerationInstructions.Exclude>
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <GenerationInstructions.Exclude>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body1" textAlign={"center"}>
                Item 2
              </Typography>
            </StyledBox>
          </GenerationInstructions.Exclude>
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <GenerationInstructions.Exclude>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body1" textAlign={"center"}>
                Item 3
              </Typography>
            </StyledBox>
          </GenerationInstructions.Exclude>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <GenerationInstructions.Exclude>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body1" textAlign={"center"}>
                Item 4
              </Typography>
            </StyledBox>
          </GenerationInstructions.Exclude>
        </Grid>
      </Grid>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Grid container {...props}>
          <Grid size={{ xs: 12, lg: 3 }}>
          </Grid>
          <Grid size={{ xs: 12, lg: 9 }}>
          </Grid>
          <Grid size={{ xs: 12, lg: 9 }}>
          </Grid>
          <Grid size={{ xs: 12, lg: 3 }}>
          </Grid>
        </Grid>
        `,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StyledContent>
          <Typography variant="body2">
            Inserts a complete mesh structure with static elements
          </Typography>
          <Box mt={2}>
            <Story />
          </Box>
        </StyledContent>
      );
    },
  ],
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
            <Grid size={{ xs: 12, lg: 3 }} key={gridItem}>
              <GenerationInstructions.Exclude>
                <StyledBox sx={{ p: 2 }}>
                  <Typography variant="body1" textAlign={"center"}>
                    Element {gridItem}
                  </Typography>
                </StyledBox>
              </GenerationInstructions.Exclude>
            </Grid>
          );
        })}
      </Grid>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Grid container {...props}>
            [].map((gridItem) => {
              return (
                <Grid size={{ xs: 12, lg: 3 }} key={gridItem}>
                </Grid>
              );
            })
          </Grid>
        `,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StyledContent>
          <Typography variant="body2">
            Inserts <code>[].map</code> wrapped in the <code>Grid</code>{" "}
            container with dynamic elements
          </Typography>
          <Box mt={2}>{Story()}</Box>
        </StyledContent>
      );
    },
  ],
};
