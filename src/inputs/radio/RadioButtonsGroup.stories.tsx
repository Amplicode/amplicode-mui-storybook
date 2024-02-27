import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const meta = {
  title: "Inputs/Radio/RadioButtonsGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  argTypes: {
    row: {
      control: "boolean",
    },
  },
  args: {
    row: false,
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ row }) => {
    return (
      <FormControl>
        <FormLabel id="radio-buttons-group-label">Owner</FormLabel>
        <RadioGroup row={row} defaultValue="John Doe" name="radio-buttons-group">
          <FormControlLabel value="John Doe" control={<Radio />} label="John Doe" />
          <FormControlLabel value="Jane Doe" control={<Radio />} label="Jane Doe" />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const Controlled: Story = {
  render: ({ row }) => {
    return (
      <FormControl>
        <FormLabel id="radio-buttons-group-label">Owner</FormLabel>
        <RadioGroup row={row} name="radio-buttons-group" value={"John Doe"} onChange={() => {}}>
          <FormControlLabel value="John Doe" control={<Radio />} label="John Doe" />
          <FormControlLabel value="Jane Doe" control={<Radio />} label="Jane Doe" />
        </RadioGroup>
      </FormControl>
    );
  },
};
