import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/ToggleButtonGroup",
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Toggle Button allows users to toggle between different states.
        </Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: "text",
      description: "The currently selected value of the toggle button.",
      category: "Main",
    },
    disabled: {
      control: "boolean",
      description: "If true, the component is disabled.",
      category: "Behavior",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the toggle button.",
      category: "Appearance",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
      description: "The color of the toggle button.",
      category: "Appearance",
    },
    exclusive: {
      control: "boolean",
      description:
        "If true, only one button can be selected at a time in the group.",
      category: "Behavior",
    },
    fullWidth: {
      control: "boolean",
      description:
        "If true, the buttons will take up the full width of their container.",
      category: "Layout",
    },
  },
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExclusiveSelection: Story = {
  render: ({ exclusive }) => {
    const [alignment, setAlignment] = useState("left");
    return (
      <CenterStory>
        <ToggleButtonGroup
          value={alignment}
          exclusive={exclusive}
          onChange={(_, newAlignment) => setAlignment(newAlignment)}
        >
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </CenterStory>
    );
  },
  args: {
    exclusive: true,
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          A group of toggle buttons where only one can be selected at a time.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};

export const MultipleSelection: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>([]);
    return (
      <CenterStory>
        <ToggleButtonGroup
          value={formats}
          onChange={(_, newFormats) => setFormats(newFormats)}
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </CenterStory>
    );
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          A toggle button group allowing multiple selections for text
          formatting.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};
