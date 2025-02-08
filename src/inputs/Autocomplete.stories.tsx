import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete, Box, TextField } from "@mui/material";

type Option = {
  id: string;
  label: string;
};

const getOptionLabel = (option: Option) => {
  return `${option.label}`;
};

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const meta = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: {
      control: "object",
      description: "An array of options to populate the dropdown list. Each option can be a string or an object.",
      category: "Core Functionality",
    },
    getOptionLabel: {
      control: "text", // function
      description: "A function that returns the string label of a given option. Useful when options are objects.",
      category: "Core Functionality",
    },
    renderInput: {
      control: "text", // function
      description: "A function that renders the input component. Commonly used to integrate with TextField.",
      category: "Core Functionality",
    },
    renderOption: {
      control: "text", // function
      description: "A function that customizes the rendering of options in the dropdown.",
      category: "Core Functionality",
    },
    value: {
      control: "object",
      description: "The selected value(s) of the component.",
      category: "Core Functionality",
    },
    onChange: {
      control: "text", // function
      description: "Callback fired when the value changes.",
      category: "Core Functionality",
    },
    inputValue: {
      control: "text",
      description: "The current value of the input element.",
      category: "Core Functionality",
    },
    onInputChange: {
      control: "text", // function
      description: "Callback fired when the input value changes.",
      category: "Core Functionality",
    },
  
    // Behavior Control
    freeSolo: {
      control: "boolean",
      description: "If true, allows input of values not present in the options list.",
      category: "Behavior Control",
    },
    multiple: {
      control: "boolean",
      description: "If true, allows multiple selections.",
      category: "Behavior Control",
    },
    disableCloseOnSelect: {
      control: "boolean",
      description: "If true, the dropdown will not close upon option selection.",
      category: "Behavior Control",
    },
    autoHighlight: {
      control: "boolean",
      description: "If true, the first option is automatically highlighted.",
      category: "Behavior Control",
    },
    autoSelect: {
      control: "boolean",
      description: "If true, typing a matching option will select it automatically.",
      category: "Behavior Control",
    },
    clearOnEscape: {
      control: "boolean",
      description: "If true, pressing the Escape key will clear the input and close the dropdown.",
      category: "Behavior Control",
    },
    disableClearable: {
      control: "boolean",
      description: "If true, the clear button will be hidden.",
      category: "Behavior Control",
    },
    includeInputInList: {
      control: "boolean",
      description: "If true, the input value is included in the options list.",
      category: "Behavior Control",
    },
    openOnFocus: {
      control: "boolean",
      description: "If true, the dropdown opens when the input gains focus.",
      category: "Behavior Control",
    },
    selectOnFocus: {
      control: "boolean",
      description: "If true, the input text is selected when the input gains focus.",
      category: "Behavior Control",
    },
    blurOnSelect: {
      control: "boolean",
      description: "Determines if the input should lose focus upon selection. Accepts true, false, or 'touch'/'mouse' to specify the interaction type.",
      category: "Behavior Control",
    },
    clearOnBlur: {
      control: "boolean",
      description: "If true, clears the input when it loses focus.",
      category: "Behavior Control",
    },
    handleHomeEndKeys: {
      control: "boolean",
      description: "If true, the Home and End keys navigate to the first and last options.",
      category: "Behavior Control",
    },
  
    // Customization
    renderTags: {
      control: "text", // function
      description: "Function to customize the rendering of selected values when multiple is true.",
      category: "Customization",
    },
    filterOptions: {
      control: "text", // function
      description: "Function to filter the options displayed in the dropdown.",
      category: "Customization",
    },
    getOptionDisabled: {
      control: "text", // function
      description: "Function that determines if an option is disabled.",
      category: "Customization",
    },
    groupBy: {
      control: "text", // function
      description: "Function to group options. The return value is used as the group heading.",
      category: "Customization",
    },
    isOptionEqualToValue: {
      control: "text", // function
      description: "Function to compare an option with the selected value to determine equality.",
      category: "Customization",
    },
  
    // Accessibility
    disableListWrap: {
      control: "boolean",
      description: "If true, the list box wrapping is disabled.",
      category: "Accessibility",
    },
    loading: {
      control: "boolean",
      description: "If true, displays a loading indicator at the bottom of the list box.",
      category: "Accessibility",
    },
    noOptionsText: {
      control: "text",
      description: "Text displayed when no options are available.",
      category: "Accessibility",
    },
    loadingText: {
      control: "text",
      description: "Text displayed while options are loading.",
      category: "Accessibility",
    },
    openText: {
      control: "text",
      description: "Aria-label text for the open dropdown button.",
      category: "Accessibility",
    },
    closeText: {
      control: "text",
      description: "Aria-label text for the close dropdown button.",
      category: "Accessibility",
    },
    clearText: {
      control: "text",
      description: "Aria-label text for the clear button.",
      category: "Accessibility",
    },
  },
  args: {
    options,
    disabled: false,
    multiple: false,
    size: "medium",
    fullWidth: false,
    disableClearable: false,
    freeSolo: false,
  },
  decorators: [
    (Story: () => React.JSX.Element) => {
      return (
        <Box width={200}>
          <Story />
        </Box>
      );
    },
  ],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ options, renderInput, ...props }) => {
    return (
      <Autocomplete disablePortal options={options} renderInput={renderInput} />
    );
  },
  args: {
    renderInput: (params) => <TextField {...params} label={"Select option"} />,
  },
};
