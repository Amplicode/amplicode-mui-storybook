import type { Meta, StoryObj } from "@storybook/react";
import { Rating, Typography, Box, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta = {
  title: "Inputs/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Rating component allows users to provide feedback by selecting a value
          from a set of stars.
        </Typography>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: "number",
      description: "The rating value.",
      category: "Values",
    },
    defaultValue: {
      control: "number",
      description: "The default rating value.",
      category: "Values",
    },
    precision: {
      control: "number",
      description: "The precision of the rating (e.g., 0.5 for half-stars).",
      category: "Behavior",
    },
    readOnly: {
      control: "boolean",
      description: "If true, the rating cannot be changed by the user.",
      category: "Behavior",
    },
    disabled: {
      control: "boolean",
      description: "If true, the rating component is disabled.",
      category: "Behavior",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the rating component.",
      category: "Appearance",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the value changes.",
      category: "Events",
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return <Rating {...props} />;
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Default rating component with interactive stars.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const ReadOnly: Story = {
  render: ({ readOnly, ...props }) => {
    return <Rating readOnly={readOnly} {...props} />;
  },
  args: {
    readOnly: true,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Rating component in read-only mode.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const WithDefaultValue: Story = {
  render: ({ defaultValue, ...props }) => {
    return <Rating defaultValue={defaultValue} {...props} />;
  },
  args: {
    defaultValue: 3,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Rating component with a default value set.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const HalfStarPrecision: Story = {
  render: ({ precision, defaultValue, ...props }) => {
    return (
      <Rating precision={precision} defaultValue={defaultValue} {...props} />
    );
  },
  args: {
    defaultValue: 2.5,
    precision: 0.5,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Rating component with half-star precision.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};

export const CustomIcon: Story = {
  render: ({ precision, defaultValue, ...props }) => {
    return (
      <Rating
        precision={precision}
        defaultValue={defaultValue}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        {...props}
      />
    );
  },
  args: {
    defaultValue: 2.5,
    precision: 0.5,
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Rating component with half-star precision.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </div>
    ),
  ],
};
