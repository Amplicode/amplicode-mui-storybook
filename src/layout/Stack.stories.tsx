import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { StyledBox } from "./components/StyledBox";
import { replaceOnGenerate } from "@amplicode/storybook-extensions";
import { P } from "storybook/internal/components";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["divider"],
    },
    docs: {
      description: {
        component: `<p>Stack is a container component for arranging elements vertically or horizontally.</p><p>The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.</p><p>Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement.</p><p>This is a wrapper compoenent.</p>`,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ width: 500, height: 250, p: 2 }}>
          <Story />
        </Paper>
      );
    },
  ],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    alignItems: {
      control: "select",
      options: [
        "baseline",
        "normal",
        "stretch",
        "center",
        "flex-end",
        "flex-start",
      ],
    },
    justifyContent: {
      control: "select",
      options: [
        "baseline",
        "normal",
        "stretch",
        "center",
        "flex-end",
        "flex-start",
        "space-around",
        "space-between",
        "space-evenly",
      ],
    },
    spacing: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    useFlexGap: {
      control: "boolean",
    },
  },
  tags: ["wrapper", "align"],
  args: {
    direction: "column",
    spacing: 2,
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        {replaceOnGenerate(
          <>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 1</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 2</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 3</Typography>
            </StyledBox>
          </>,
          <>
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </>
        )}
      </Stack>
    );
  },
  args: {
    direction: "row",
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Stack {...props} direction={"row"}>
          <Typography variant="body2">Item 1</Typography>
          <Typography variant="body2">Item 2</Typography>
          <Typography variant="body2">Item 3</Typography>
        </Stack>
      `,
      },
    },
  },
};

export const Vertical: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        {replaceOnGenerate(
          <>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 1</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 2</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 3</Typography>
            </StyledBox>
          </>,
          <>
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </>
        )}
      </Stack>
    );
  },
  args: {
    direction: "column",
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Stack {...props} direction={"column"}>
          <Typography variant="body2">Item 1</Typography>
          <Typography variant="body2">Item 2</Typography>
          <Typography variant="body2">Item 3</Typography>
        </Stack>
      `,
      },
    },
  },
};

export const Responsive: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} direction={{ xs: "column" }}>
        {replaceOnGenerate(
          <>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 1</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 2</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 3</Typography>
            </StyledBox>
          </>,
          <>
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </>
        )}
      </Stack>
    );
  },
  args: {
    direction: { xs: "column", sm: "row" },
    spacing: { xs: 1, sm: 2, md: 4 },
  },
  parameters: {
    docs: {
      description: {
        story: `<p>You can switch the <code>direction</code> or <code>spacing</code> values based on the active breakpoint.`,
      },
      source: {
        code: `
        <Stack {...props} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Typography variant="body2">Item 1</Typography>
          <Typography variant="body2">Item 2</Typography>
          <Typography variant="body2">Item 3</Typography>
        </Stack>
      `,
      },
    },
  },
};

const dividerComponents = () => {
  return [1, 2, 3].map((item) => {
    return <Typography variant="body2">Item {item}</Typography>;
  });
};

const styledDividerComponents = () => {
  return [1, 2, 3].map((item) => {
    return (
      <StyledBox sx={{ p: 2 }}>
        <Typography variant="body2">Item {item}</Typography>
      </StyledBox>
    );
  });
};

export const CustomDivider: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        {replaceOnGenerate(styledDividerComponents(), dividerComponents())}
      </Stack>
    );
  },
  args: {
    direction: "row",
    divider: <Divider orientation="vertical" flexItem />,
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Use the <code>divider</code> prop to insert an element between each child.</p>`,
      },
      source: {
        code: `
          <Stack {...props} direction={"row"} divider={<Divider orientation="vertical" flexItem />}>
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </Stack>
        `,
      },
    },
  },
};

export const Wrap: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} useFlexGap flexWrap="wrap">
        {replaceOnGenerate(
          <>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 1</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 2</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2">Item 3</Typography>
            </StyledBox>
          </>,
          <>
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </>
        )}
      </Stack>
    );
  },
  args: {
    direction: "row",
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 200 }}>
          <Story />
        </Box>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `<p>Based on flexbox <code>gap</code></p><p>We recommend checking the support percentage before using it.</p>`,
      },
      source: {
        code: `
          <Stack {...props} useFlexGap flexWrap="wrap" direction={"row"}>
            <Typography variant="body2">Item 1</Typography>
            <Typography variant="body2">Item 2</Typography>
            <Typography variant="body2">Item 3</Typography>
          </Stack>
        `,
      },
    },
  },
};

export const WrapFillWidth: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props} useFlexGap flexWrap="wrap">
        {/* flex: 1 is important for an item to fill all space in the stream */}
        {replaceOnGenerate(
          <>
            <StyledBox sx={{ p: 2, flex: 1 }}>
              <Typography variant="body2">Item 1</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2, flex: 1 }}>
              <Typography variant="body2">Item 2</Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2, flex: 1 }}>
              <Typography variant="body2">Looooooooong Item 3</Typography>
            </StyledBox>
          </>,
          <>
            <Typography sx={{ p: 2, flex: 1 }} variant="body2">
              Item 1
            </Typography>
            <Typography sx={{ p: 2, flex: 1 }} variant="body2">
              Item 2
            </Typography>
            <Typography sx={{ p: 2, flex: 1 }} variant="body2">
              Looooooooong Item 3
            </Typography>
          </>
        )}
      </Stack>
    );
  },
  args: {
    direction: "row",
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 200 }}>
          <Story />
        </Box>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `<p>Based on flexbox <code>gap</code></p><p>We recommend checking the support percentage before using it.</p>`,
      },
      source: {
        code: `
          <Stack {...props} useFlexGap flexWrap="wrap" direction={"row"}>
            <Typography sx={{ p: 2, flex: 1 }} variant="body2">Item 1</Typography>
            <Typography sx={{ p: 2, flex: 1 }} variant="body2">Item 2</Typography>
            <Typography sx={{ p: 2, flex: 1 }} variant="body2">Item 3</Typography>
          </Stack>
        `,
      },
    },
  },
};

export const Truncated: Story = {
  render: ({ ...props }) => {
    return (
      <Stack {...props}>
        {replaceOnGenerate(
          <>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2" noWrap>
                Item 1
              </Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2" noWrap>
                Item 2
              </Typography>
            </StyledBox>
            <StyledBox sx={{ p: 2 }}>
              <Typography variant="body2" noWrap>
                Looooooooong Item 3
              </Typography>
            </StyledBox>
          </>,
          <>
            <Typography sx={{ p: 2 }} variant="body2" noWrap>
              Item 1
            </Typography>
            <Typography sx={{ p: 2 }} variant="body2" noWrap>
              Item 2
            </Typography>
            <Typography sx={{ p: 2 }} variant="body2" noWrap>
              Looooooooong Item 3
            </Typography>
          </>
        )}
      </Stack>
    );
  },
  args: {
    direction: "column",
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 100, outline: "1px solid", p: 2 }}>
          <Story />
        </Box>
      );
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <Stack {...props}>
          <Typography variant="body2" noWrap>Item 1</Typography>
          <Typography variant="body2" noWrap>Item 2</Typography>
          <Typography variant="body2" noWrap>Item 3</Typography>
        </Stack>
      `,
      },
    },
  },
};
