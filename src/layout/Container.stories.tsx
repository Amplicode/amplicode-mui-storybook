import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Container, Typography, Grid } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { StyledBox } from "./components/StyledBox";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    // layout: "centered",
    controls: {
      exclude: ["divider"],
    },
    docs: {
      description: {
        component:
          "The container centers your content horizontally. It's the most basic layout element.",
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    fixed: {
      control: "boolean",
    },
  },
  tags: ["wrapper"],
  args: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fluid: Story = {
  render: ({ ...props }) => {
    return (
      <Container maxWidth={"lg"} {...props}>
        <GenerationInstructions.Exclude>
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              minHeight: "100vh",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <Typography variant="body2">
              A fluid container width is bounded by the maxWidth prop value.
            </Typography>
            <Grid container spacing={2} mt={2}>
              {Array(10)
                .fill(0)
                .map((gridItem) => {
                  return (
                    <Grid size={{ xs: 12, md: 3 }}>
                      <StyledBox height={100} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </GenerationInstructions.Exclude>
      </Container>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Container maxWidth={"lg"} {...props}></Container>
        `,
      },
    },
  },
};

export const Fixed: Story = {
  render: ({ ...props }) => {
    return (
      <Container fixed {...props}>
        <GenerationInstructions.Exclude>
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              minHeight: "100vh",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <Typography variant="body2">
              Responsive container. The max-width matches the min-width of the
              current breakpoint.
            </Typography>
            <Grid container spacing={2} mt={2}>
              {Array(10)
                .fill(0)
                .map((gridItem) => {
                  return (
                    <Grid size={{ xs: 12, md: 3 }}>
                      <StyledBox height={100} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </GenerationInstructions.Exclude>
      </Container>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Container fixed {...props}></Container>
        `,
      },
    },
  },
};
