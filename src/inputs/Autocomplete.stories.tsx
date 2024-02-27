import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete, TextField } from "@mui/material";

const meta = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ['options', 'renderInput']
    }
  },
  decorators: [],
  argTypes: {

  },
  args: {
    options: ['Button', 'Autocomplete', 'Checkbox', 'Rating', 'Select', 'Avatar', 'Divider']
  }
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Combo: Story = {
  render: ({ renderInput, ...props }) => {
    // @ts-ignore: options must be overwritten for demonstrating
    return <Autocomplete options={[]} renderInput={renderInput} sx={{ width: 300 }} {...props}  />;
  },
  args: {
    renderInput: (params) => <TextField {...params} label="Label" />
  },
};
