import type { Meta, StoryObj } from "@storybook/react";
import { FormControlLabel, Radio } from "@mui/material";

const meta = {
  title: "Inputs/Radio/FormControl",
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
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  render: ({ label, labelPlacement }) => {
    return (
      <FormControlLabel control={<Radio />} label={label} labelPlacement={labelPlacement} />
    );
  },
  args: {
    label: 'Label',
    control: <></>
  }
};
