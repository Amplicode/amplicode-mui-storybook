import type { Meta, StoryObj } from "@storybook/react";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, Box, styled } from "@mui/material";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Radio Group allows users to select one option from a set.</Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    row: {
      control: "boolean",
      description: "If true, the radio buttons are displayed in a row.",
      category: "Layout",
    },
    defaultValue: {
      control: "text",
      description: "The default selected value.",
      category: "Values",
    },
    name: {
      control: "text",
      description: "The name of the radio group, used for form submission.",
      category: "Values",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when a radio button is selected.",
      category: "Events",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <FormControl>
        <RadioGroup {...props}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      </FormControl>
    );
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Default vertical radio group with two options.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const RowLayout: Story = {
  render: ({ row, ...props }) => {
    return (
      <FormControl>
        <RadioGroup row={row} {...props}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      </FormControl>
    );
  },
  args: {
    row: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Radio group displayed in a horizontal row.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const WithDefaultValue: Story = {
  render: ({ defaultValue, ...props }) => {
    return (
      <FormControl>
        <RadioGroup defaultValue={defaultValue} {...props}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      </FormControl>
    );
  },
  args: {
    defaultValue: "option1",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Radio group with a default selected option.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};
