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

export const Contaier: Story = {
  render: ({ ...props }) => {
    return (
      <Grid container spacing={2}>
        <GenerationInstructions.Exclude>
          {new Array(10)
            .fill(1)
            .map((_, index) => index + 1)
            .map((item) => {
              return (
                <Grid size={3} key={item}>
                  <StyledBox sx={{ p: 1 }}>
                    <Typography variant="body2" noWrap>
                      Child {item}
                    </Typography>
                  </StyledBox>
                </Grid>
              );
            })}
        </GenerationInstructions.Exclude>
      </Grid>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Grid container spacing={2}></Grid>
        `,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StyledContent>
          <Typography variant="body2">
            Component to wrap node with Grid container
          </Typography>
          <Box mt={2}>{Story()}</Box>
        </StyledContent>
      );
    },
  ],
};
