import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, MouseEvent } from "react";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "Inputs/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ToggleButtones toggle the state of a single setting on or off.",
      },
    },
  },
  args: {
    size: "medium",
  },
  argTypes: {
    value: {
      control: "text",
      description: "The currently selected value(s). Must be controlled.",
    },
    exclusive: {
      control: "boolean",
      description:
        "If `true`, only one ToggleButton can be selected at a time (like radio buttons).",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Defines the orientation of the buttons.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the buttons.",
    },
    color: {
      control: "select",
      options: [
        "standard",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      description: "The color of the toggle buttons.",
    },
    disabled: {
      control: "boolean",
      description:
        "If `true`, all toggle buttons in the group will be disabled.",
    },
    fullWidth: {
      control: "boolean",
      description:
        "If `true`, the toggle buttons take up the full width of their container.",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the selected value changes.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Exclusive: Story = {
  render: () => {
    const [alignment, setAlignment] = useState<string | null>("left");

    const handleAlignment = (
      event: MouseEvent<HTMLElement>,
      newAlignment: string | null
    ) => {
      setAlignment(newAlignment);
    };

    return (
      <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
        <ToggleButton value="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButtones toggle the state of a single setting on or off.",
      },
    },
  },
};

export const Multiple: Story = {
  render: () => {
    const [formats, setFormats] = useState(() => ["bold", "italic"]);

    const handleFormat = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: string[]
    ) => {
      setFormats(newFormats);
    };

    return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButtones toggle the state of a single setting on or off.",
      },
    },
  },
};
