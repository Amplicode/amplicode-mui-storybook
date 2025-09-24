import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Paper, styled, Grid, Typography } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
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
  },
  // decorators: [(Story) => <Box width={500}>{Story()}</Box>],
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
  render: ({ ...props }, { children, ...contextArgs }) => {
    return (
      <Grid size={{ xs: 12, lg: 3 }}>
        <GenerationInstructions.Exclude>
          <StyledBox>
            <Typography variant="body2">Wrapper {children}</Typography>
          </StyledBox>
        </GenerationInstructions.Exclude>
      </Grid>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Grid size={{ xs: 12, lg: 3 }}></Grid>
        `,
      },
    },
  },
  decorators: [
    (Story) => {
      const gridItems = new Array(10).fill(1).map((_, index) => index + 1);
      return (
        <StyledContent>
          <Typography variant="body2">
            Component to wrap node with Grid item
          </Typography>
          <Grid container spacing={2} mt={2}>
            {gridItems.map((item) => {
              return <Story key={item}>{item}</Story>;
            })}
          </Grid>
        </StyledContent>
      );
    },
  ],
};
