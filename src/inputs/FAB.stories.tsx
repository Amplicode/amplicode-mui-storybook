import type { Meta, StoryObj } from "@storybook/react";
import { Fab, Typography, Box, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/FloatingActionButton",
  component: Fab,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Floating Action Button (FAB) represents the primary action in an application.</Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    // Core Functionality
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "error", "info", "warning"],
      description: "Defines the button color.",
      category: "Core Functionality",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Defines the button size.",
      category: "Core Functionality",
    },
    variant: {
      control: "select",
      options: ["circular", "extended"],
      description: "Defines the button shape.",
      category: "Core Functionality",
    },
    disabled: {
      control: "boolean",
      description: "If true, the button is disabled.",
      category: "Core Functionality",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the button is clicked.",
      category: "Events",
    },
  },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <Fab {...props}><AddIcon /></Fab>;
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Default Floating Action Button with an add icon.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Extended: Story = {
  render: ({ variant, ...props }) => {
    return <Fab variant={variant} {...props}>Extended</Fab>;
  },
  args: {
    variant: "extended",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Extended FAB with a label.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const Disabled: Story = {
  render: ({ disabled, ...props }) => {
    return <Fab disabled={disabled} {...props}><AddIcon /></Fab>;
  },
  args: {
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Disabled FAB cannot be interacted with.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const PrimaryColor: Story = {
  render: ({ color, ...props }) => {
    return <Fab color={color} {...props}><EditIcon /></Fab>;
  },
  args: {
    color: "primary",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">FAB with primary color and edit icon.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const LargeSize: Story = {
  render: ({ size, ...props }) => {
    return <Fab size={size} {...props}><NavigationIcon /></Fab>;
  },
  args: {
    size: "large",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">Large FAB for enhanced visibility.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};