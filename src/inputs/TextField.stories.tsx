import type { Meta, StoryObj } from "@storybook/react";
import { TextField, Typography, Box, styled } from "@mui/material";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          TextField component is used for user input in forms.
        </Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
      description: "The variant of the text field.",
      category: "Appearance",
    },
    label: {
      control: "text",
      description: "Label text for the input.",
      category: "Content",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when the input is empty.",
      category: "Content",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input.",
      category: "Content",
    },
    error: {
      control: "boolean",
      description: "Indicates if there is an error in the input.",
      category: "State",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input.",
      category: "State",
    },
    fullWidth: {
      control: "boolean",
      description:
        "If true, the input will take the full width of its container.",
      category: "Layout",
    },
    multiline: {
      control: "boolean",
      description: "If true, the input will be a textarea.",
      category: "Content",
    },
    rows: {
      control: "number",
      description: "Number of rows for multiline input.",
      category: "Content",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the input field.",
      category: "Appearance",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <TextField {...props} />;
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          Default TextField with no additional properties.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};

export const WithLabel: Story = {
  render: ({ label, ...props }) => {
    return <TextField label={label} {...props} />;
  },
  args: {
    label: "Label",
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">TextField with a label.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};

export const ErrorState: Story = {
  render: ({ error, helperText, ...props }) => {
    return <TextField error={error} helperText={helperText} {...props} />;
  },
  args: {
    error: true,
    helperText: "Incorrect input.",
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          TextField with an error state and helper text.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return <TextField disabled={disabled} {...props} />;
  },
  args: {
    disabled: true,
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          Disabled TextField that cannot be interacted with.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};

export const Multiline: Story = {
  render: ({ multiline, rows, ...props }) => {
    return <TextField multiline={multiline} rows={rows} {...props} />;
  },
  args: {
    multiline: true,
    rows: 4,
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          Multiline TextField with 4 rows.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};
