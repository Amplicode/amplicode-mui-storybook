import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  MenuItem,
  Typography,
  Box,
  styled,
  FormControl,
  InputLabel,
} from "@mui/material";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Select component allows users to choose from a list of options.
        </Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: "text",
      description: "The selected value.",
      category: "Values",
    },
    defaultValue: {
      control: "text",
      description: "The default selected value.",
      category: "Values",
    },
    disabled: {
      control: "boolean",
      description: "If true, the select component is disabled.",
      category: "Behavior",
    },
    multiple: {
      control: "boolean",
      description: "If true, multiple values can be selected.",
      category: "Behavior",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the select component.",
      category: "Appearance",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the selected value changes.",
      category: "Events",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="simple-select-label">Select</InputLabel>
        <Select labelId="simple-select-label" label={"Select"} {...props}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Default select component with predefined options.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return (
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="simple-select-label">Select</InputLabel>
        <Select disabled={disabled} label={"Select"} {...props}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
  args: {
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Select component in disabled mode.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};
