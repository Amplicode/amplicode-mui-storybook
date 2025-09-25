import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, IconButton, styled, Typography } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { PlayCircleFilledWhiteOutlined } from "@mui/icons-material";
import { StyledBox } from "./components/StyledBox";

const meta = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["divider"],
    },
    docs: {
      description: {
        component: `<p>The Box component is a generic container for grouping other components. It's a fundamental building block when working with Material UI—you can think of it as a <code>div</code> with extra built-in features, like access to your app's theme and the <a href="https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop">sx prop</a>.</p>`,
      },
    },
  },
  tags: ["wrapper", "block", "element"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <Box {...props}>
        <GenerationInstructions.Exclude>
          <Typography variant="caption">
            Basic universal mui container with all available system properties.
          </Typography>
        </GenerationInstructions.Exclude>
      </Box>
    );
  },
  decorators: [(Story) => <StyledBox>{Story()}</StyledBox>],
  parameters: {
    docs: {
      source: {
        code: `<Box></Box>`,
      },
    },
  },
};

export const AbsoluteTopAligned: Story = {
  render: ({ ...props }) => {
    return (
      <Box
        {...props}
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex"
        }}
      >
        <GenerationInstructions.Exclude>
          <Box
            sx={(theme) => ({
              width: "100%",
              background: "#3170de",
              color: "#fff",
              p: 2,
              borderRadius: 1,
            })}
          >
            <Typography>Title</Typography>
          </Box>
        </GenerationInstructions.Exclude>
      </Box>
    );
  },
  decorators: [
    (Story) => (
      <StyledBox
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        width={500}
      >
        <Typography variant="caption">
          The title banner is an example of an absolutely top aligned block.
        </Typography>
        <Typography variant="caption">
          The title banner is an example of an absolutely top aligned block.
        </Typography>
        <Typography variant="caption">
          The title banner is an example of an absolutely top aligned block.
        </Typography>
        <Typography variant="caption">
          The title banner is an example of an absolutely top aligned block.
        </Typography>
        <Typography variant="caption">
          The title banner is an example of an absolutely top aligned block.
        </Typography>
        {Story()}
      </StyledBox>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `<p>Typically used in cards, menus, players, etc. to align controls. It is important to change the parent position to something other than "static", such as "relative".</p>`,
      },
      source: {
        code: `<Box
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></Box>`,
      },
    },
  },
  tags: ["wrapper", "align", "position", "top"],
};

export const AbsoluteBottomAligned: Story = {
  render: ({ ...props }) => {
    return (
      <Box
        {...props}
        sx={{
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: 0,
          display: "flex"
        }}
      >
        <GenerationInstructions.Exclude>
          <Box
            sx={(theme) => ({
              width: "100%",
              background: "#3170de",
              color: "#fff",
              p: 2,
              borderRadius: 1,
            })}
          >
            <Typography>Controls</Typography>
          </Box>
        </GenerationInstructions.Exclude>
      </Box>
    );
  },
  decorators: [
    (Story) => (
      <StyledBox
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        width={500}
      >
        <Typography variant="caption">
          The controls panel is an example of an absolutely bottom aligned
          block.
        </Typography>
        <Typography variant="caption">
          The controls panel is an example of an absolutely bottom aligned
          block.
        </Typography>
        <Typography variant="caption">
          The controls panel is an example of an absolutely bottom aligned
          block.
        </Typography>
        <Typography variant="caption">
          The controls panel is an example of an absolutely bottom aligned
          block.
        </Typography>
        <Typography variant="caption">
          The controls panel is an example of an absolutely bottom aligned
          block.
        </Typography>
        {Story()}
      </StyledBox>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `<p>Typically used in cards, menus, players, etc. to align controls. It is important to change the parent position to something other than "static", such as "relative".</p>`,
      },
      source: {
        code: `
          <Box
            {...props}
            sx={{
              width: "100%",
              position: "absolute",
              left: 0,
              bottom: 0,
            }}
          >
          </Box>
        `,
      },
    },
  },
  tags: ["wrapper", "align", "position", "bottom"],
};

export const AbsoluteCenteredFixedSize: Story = {
  render: ({ ...props }) => {
    return (
      <Box
        {...props}
        sx={{
          width: "60px",
          height: "60px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          display: "flex"
        }}
      >
        <GenerationInstructions.Exclude>
          <IconButton sx={{ width: 60, height: 60 }} color="primary">
            <PlayCircleFilledWhiteOutlined
              sx={{ width: "inherit", height: "inherit" }}
            />
          </IconButton>
        </GenerationInstructions.Exclude>
      </Box>
    );
  },
  decorators: [
    (Story) => (
      <StyledBox
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        width={500}
      >
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, fixed-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, fixed-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, fixed-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, fixed-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, fixed-size
          block.
        </Typography>
        {Story()}
      </StyledBox>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `<p>Typically used in cards, menus, players, etc. to align controls. It is important to change the parent position to something other than "static", such as "relative".</p>`,
      },
      source: {
        code: `
          <Box
            {...props}
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
            }}
          >
          </Box>
        `,
      },
    },
  },
  tags: ["wrapper", "align", "position", "center"],
};

export const AbsoluteCenteredRandomSize: Story = {
  render: ({ children, ...props }) => {
    return (
      <Box
        {...props}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex"
        }}
      >
        <GenerationInstructions.Exclude>
          <Box
            sx={(theme) => ({
              background: "#3170de",
              color: "#fff",
              p: 2,
              borderRadius: 1,
            })}
          >
            <Typography>{children}</Typography>
          </Box>
        </GenerationInstructions.Exclude>
      </Box>
    );
  },
  args: {
    children: "Random content",
  },
  decorators: [
    (Story) => (
      <StyledBox
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        width={500}
      >
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, random-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, random-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, random-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, random-size
          block.
        </Typography>
        <Typography variant="caption">
          The play icon is an example of an absolutely centered, random-size
          block.
        </Typography>
        {Story()}
      </StyledBox>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `<p>Typically used in cards, menus, players, etc. to align controls. It is important to change the parent position to something other than "static", such as "relative".</p>`,
      },
      source: {
        code: `
          <Box
            {...props}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
          </Box>
        `,
      },
    },
  },
  tags: ["wrapper", "align", "position", "center"],
};
