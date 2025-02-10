import type { Meta, StoryObj } from "@storybook/react";
import { Slider, Typography, Box, styled } from "@mui/material";
import { useState } from "react";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Slider component allows users to select a value from a range.
        </Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: "number",
      description: "The value of the slider.",
      category: "Values",
    },
    defaultValue: {
      control: "number",
      description: "The default value of the slider.",
      category: "Values",
    },
    disabled: {
      control: "boolean",
      description: "If true, the slider is disabled.",
      category: "Behavior",
    },
    min: {
      control: "number",
      description: "The minimum allowed value of the slider.",
      category: "Range",
    },
    max: {
      control: "number",
      description: "The maximum allowed value of the slider.",
      category: "Range",
    },
    step: {
      control: "number",
      description: "The step value between selectable values.",
      category: "Range",
    },
    marks: {
      control: "boolean",
      description: "If true, marks will be displayed along the slider.",
      category: "Display",
    },
    track: {
      control: "select",
      options: ["normal", "inverted", false],
      description: "The track type of the slider.",
      category: "Display",
    },
    valueLabelDisplay: {
      control: "select",
      options: ["auto", "on", "off"],
      description: "Determines how the value label is displayed.",
      category: "Labels",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider.",
      category: "Display",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the slider.",
      category: "Appearance",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the slider value changes.",
      category: "Events",
    },
    onChangeCommitted: {
      action: "committed",
      description: "Callback fired when the value change is committed.",
      category: "Events",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <Slider {...props} />;
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Default slider component with predefined range.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const CustomRange: Story = {
  render: ({ min, max, step, ...props }) => {
    return (
      <Slider
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
        {...props}
      />
    );
  },
  args: {
    min: 10,
    max: 100,
    step: 5,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Slider with custom range and step.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: ({ size, ...props }) => {
    return <Slider size={size} {...props} />;
  },
  args: {
    size: "small",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          {`For smaller slider, use the prop size="small".`}
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const CustomMarks: Story = {
  render: ({ marks, ...props }) => {
    return <Slider marks={marks} {...props} />;
  },
  args: {
    marks: [
      { value: 20, label: "20%" },
      { value: 50, label: "50%" },
      { value: 80, label: "80%" },
    ],
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Slider with visible marks along the track.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const RestrictedValues: Story = {
  render: ({ step, ...props }) => {
    return <Slider step={step} valueLabelDisplay="auto" {...props} />;
  },
  args: {
    step: 10,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          {`You can restrict the selectable values to those provided with the
          marks prop with step={null}`}
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const VerticalSliders: Story = {
  render: ({ orientation, ...props }) => {
    return <Slider orientation={orientation} {...props} />;
  },
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <Box>
        <Typography variant="subtitle2">
          Set the orientation prop to "vertical" to create vertical sliders.
        </Typography>
        <CenterStory>
          <Box height={300}>
            <Story />
          </Box>
        </CenterStory>
      </Box>
    ),
  ],
};
