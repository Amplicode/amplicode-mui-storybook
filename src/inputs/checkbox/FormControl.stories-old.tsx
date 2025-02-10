import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Basic } from './Checkbox.stories';

const meta = {
  title: "Inputs/Checkbox/FormControl",
  component: FormControlLabel,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["control"],
    },
  },
  decorators: [],
  argTypes: {
    labelPlacement: {
      control: "select",
      options: ["end", "start", "top", "bottom"],
    },
  },
  args: {
    labelPlacement: "start"
  },
  excludeStories: ['Label']
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  render: ({ label, labelPlacement }) => {
    return (
      <FormControlLabel control={<Checkbox {...Basic.args} />} label={label} labelPlacement={labelPlacement} />
    );
  },
  args: {
    label: 'Label',
    control: <></>
  }
};
