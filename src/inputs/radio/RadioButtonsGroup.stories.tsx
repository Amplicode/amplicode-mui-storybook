import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";

type RadioGroupArgs = {
  label?: string;
  row?: boolean;
  value?: string;
  options?: string[];
  disabled?: boolean;
  direction?: string;
  size?: string;
  color?: string;
  labelPlacement?: string;
};

const meta: Meta<RadioGroupArgs> = {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A group of radio buttons that allows the user to select one option from a list.",
      },
    },
  },
  args: {
    label: "Choose one option",
    row: false,
    value: "Option 1",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  argTypes: {
    row: {
      control: "boolean",
      description: "Display radio buttons horizontally (row=true) or vertically (row=false)",
    },
    disabled: {
      control: "boolean",
      description: "Disables the entire radio group",
    },
    direction: {
      name: "Direction",
      control: "select",
      options: ["row", "column"],
      mapping: {
        row: true,
        column: false,
      },
      description: "The layout direction of the radio group",
    },
    size: {
      name: "Size",
      control: "select",
      options: ["small", "medium"],
      description: "The size of the radio buttons",
    },
    color: {
      name: "Color",
      control: "select",
      options: ["primary", "secondary", "error", "default"],
      description: "Color of the radio buttons",
    },
    labelPlacement: {
      name: "Label placement",
      control: "select",
      options: ["end", "start", "top", "bottom"],
      description: "Position of the label relative to the radio",
    },
  },
};

export default meta;

type Story = StoryObj<RadioGroupArgs>;

export const Basic: Story = {
  render: ({ label, value, options = [], row, disabled }) => (
    <FormControl disabled={disabled}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row={row} defaultValue={value}>
        {options.map((opt) => (
          <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
        ))}
      </RadioGroup>
    </FormControl>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic radio group with several options.",
      },
    },
  },
};

export const Controlled: Story = {
  render: ({ label, options = [], row }) => {
    const [selected, setSelected] = useState("Option 1");

    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          row={row}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((opt) => (
            <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
          ))}
        </RadioGroup>
      </FormControl>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled version of the component with local state.",
      },
    },
  },
};

export const WithCustomIcons: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Favorite color</FormLabel>
      <RadioGroup defaultValue="love">
        <FormControlLabel
          value="love"
          control={
            <Radio
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              color="secondary"
            />
          }
          label="I love it"
        />
        <FormControlLabel
          value="meh"
          control={<Radio />}
          label="It's okay"
        />
      </RadioGroup>
    </FormControl>
  ),
  parameters: {
    docs: {
      description: {
        story: "Uses custom icons (filled and outlined hearts) to represent a radio option.",
      },
    },
  },
};

export const WithValidation: Story = {
  render: ({ options = [], row, label }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      setError(false);
    };

    const handleBlur = () => {
      setValue("");
      setError(true);
    };

    return (
      <FormControl error={error} required>
        <FormLabel>{label}</FormLabel>
        <RadioGroup row={row} value={value} onChange={handleChange} onBlur={handleBlur}>
          {options.map((opt) => (
            <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
          ))}
        </RadioGroup>
        {error && <FormHelperText>This field is required.</FormHelperText>}
      </FormControl>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates basic required field validation for a radio group.",
      },
    },
  },
};