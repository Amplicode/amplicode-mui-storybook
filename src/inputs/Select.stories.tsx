import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const meta = {
  title: "Inputs/Select",
  component: Select,
  parameters: {
    layout: "centered",
    controls: {
    },
  },
  decorators: [],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ ...props }) => {
    const [pet, setPet] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setPet(event.target.value as string);
    };

    return (
      <FormControl sx={{width: 300}}>
        <InputLabel id="simple-select-label">Pet</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={pet}
          label="Pet"
          {...props}
          // @ts-ignore
          onChange={handleChange}
        >
          <MenuItem value={'Cat'}>Cat</MenuItem>
          <MenuItem value={'Dog'}>Dog</MenuItem>
          <MenuItem value={'Sparrow'}>Sparrow</MenuItem>
        </Select>
      </FormControl>
    );
  },
};
