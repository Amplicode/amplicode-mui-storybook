import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating, Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type RatingArgs = {
  value?: number;
  precision?: number;
  max?: number;
  readOnly?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  showLabel?: boolean;
};

const meta: Meta<RatingArgs> = {
  title: "Inputs/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Rating component allows users to provide a feedback score by selecting a number of visual symbols, typically stars.",
      },
    },
  },
  args: {
    value: 3,
    precision: 1,
    max: 5,
    readOnly: false,
    size: "medium",
    showLabel: false,
  },
  argTypes: {
    value: {
      control: "number",
      description: "The rating value",
    },
    precision: {
      control: "number",
      description: "The minimum increment value change allowed",
    },
    max: {
      control: "number",
      description: "Maximum rating value",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the component is read-only",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Defines the size of the rating icons",
    },
    disabled: {
      control: "boolean",
      description: "Disables the component",
    },
    showLabel: {
      control: "boolean",
      description: "Displays the numeric value alongside the rating",
    },
  },
};

export default meta;

type Story = StoryObj<RatingArgs>;

export const Basic: Story = {
  render: ({ value, max, precision, readOnly, size }) => (
    <Rating
      value={value}
      max={max}
      precision={precision}
      readOnly={readOnly}
      size={size}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic rating component with configurable value, size, and precision.",
      },
    },
  },
};

export const ReadOnly: Story = {
  render: ({ value, size, max }) => (
    <Rating value={value} readOnly size={size} max={max} />
  ),
  parameters: {
    docs: {
      description: {
        story: "A read-only rating component where user input is disabled.",
      },
    },
  },
};

export const Disabled: Story = {
  render: ({ value, size, max }) => (
    <Rating value={value} disabled size={size} max={max} />
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled rating component that is non-interactive.",
      },
    },
  },
};

export const CustomPrecision: Story = {
  render: ({ precision }) => (
    <Rating defaultValue={2.5} precision={precision} />
  ),
  args: {
    precision: 0.5,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates fractional rating values using custom precision.",
      },
    },
  },
};

export const Controlled: Story = {
  render: ({ precision, max, size, showLabel }) => {
    const [value, setValue] = useState<number | null>(2);

    return (
      <Box>
        <Rating
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          precision={precision}
          max={max}
          size={size}
        />
        {showLabel && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Selected: {value ?? "None"}
          </Typography>
        )}
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled version of the rating component using local state.",
      },
    },
  },
};

export const HoverFeedback: Story = {
  render: ({ max, size, precision }) => {
    const [hover, setHover] = useState(-1);
    const [value, setValue] = useState<number | null>(2);

    const labels: { [index: number]: string } = {
      1: "Very Bad",
      2: "Bad",
      3: "Okay",
      4: "Good",
      5: "Excellent",
    };

    return (
      <Box>
        <Rating
          name="hover-feedback"
          value={value}
          max={max}
          precision={precision}
          size={size}
          onChange={(_, newValue) => setValue(newValue)}
          onChangeActive={(_, newHover) => setHover(newHover)}
        />
        <Typography variant="body2" sx={{ mt: 1 }}>
          {hover !== -1
            ? labels[hover]
            : value !== null
              ? labels[value]
              : "No rating"}
        </Typography>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays a label describing the rating level when hovering over the icons.",
      },
    },
  },
};

export const CustomIcon: Story = {
  render: () => {
    const StyledRating = styled(Rating)({
      "& .MuiRating-iconFilled": {
        color: "#ff6d75",
      },
      "& .MuiRating-iconHover": {
        color: "#ff3d47",
      },
    });

    return (
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates customization of rating icons using emojis or custom SVGs.",
      },
    },
  },
};
