import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider, Box, Typography } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Slider component allows users to select a value or range from a given range by dragging a thumb.",
      },
    },
  },
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    marks: false,
    disabled: false,
    size: "medium",
    orientation: "horizontal",
  },
  argTypes: {
    value: {
      control: "number",
      description: "The current value of the slider",
    },
    min: {
      control: "number",
      description: "Minimum allowed value",
    },
    max: {
      control: "number",
      description: "Maximum allowed value",
    },
    step: {
      control: "number",
      description: "The granularity the slider can step through values",
    },
    marks: {
      control: "boolean",
      description: "Display tick marks along the slider track",
    },
    disabled: {
      control: "boolean",
      description: "Disable the slider",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the slider",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider",
    },
    valueLabelDisplay: {
      control: "select",
      options: ["auto", "on", "off", "default"],
      mapping: {
        default: undefined,
        auto: "auto",
        on: "on",
        off: "off",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Continuous: Story = {
  render: () => {
    const [value, setValue] = useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    return (
      <Box sx={{ width: 200 }}>
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Continuous sliders allow users to select a value along a subjective range.",
      },
    },
  },
};

export const Discrete: Story = {
  render: () => {
    const [value, setValue] = useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          defaultValue={30}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
        />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with marks={true}.",
      },
    },
  },
};

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export const Restricted: Story = {
  render: () => {
    const [value, setValue] = useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={20}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can restrict the selectable values to those provided with the marks prop with step={null}.",
      },
    },
  },
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can restrict the selectable values to those provided with the marks prop with step={null}.",
      },
    },
  },
};
