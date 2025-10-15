import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Link, Paper, Typography } from "@mui/material";

const meta = {
  title: "DataDisplay/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
    studioMeta: {
      kind: "multiple",
    },
  },
  decorators: [],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "overline",
      ],
    },
    noWrap: {
      control: "select",
      options: [false, true],
    },
    onClick: {
      control: "select",
      options: ["default", "genTest"],
      mapping: {
        default: undefined,
      },
    },
  },
  args: {
    variant: "h6",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  render: () => {
    return <Typography variant={"h1"}>Header</Typography>;
  },
};

export const Heading2: Story = {
  render: () => {
    return (
      <Typography variant={"h2"}>Header</Typography>
    );
  },
};

export const Heading3: Story = {
  render: () => {
    return <Typography variant={"h3"}>Header</Typography>;
  },
};

export const Heading4: Story = {
  render: () => {
    return <Typography variant={"h4"}>Header</Typography>;
  },
};

export const Heading5: Story = {
  render: () => {
    return <Typography variant={"h5"}>Header</Typography>;
  },
};

export const Heading6: Story = {
  render: () => {
    return <Typography variant={"h6"}>Header</Typography>;
  },
};

export const Subtitle1: Story = {
  render: () => {
    return <Typography variant={"subtitle1"}>Subtitle</Typography>;
  },
};

export const Subtitle2: Story = {
  render: () => {
    return <Typography variant={"subtitle2"}>Subtitle</Typography>;
  },
};

export const Body1: Story = {
  render: () => {
    return (
      <Typography variant={"body1"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ducimus
        provident itaque doloribus necessitatibus inventore est porro officia,
        mollitia nisi laudantium rerum quod praesentium reiciendis eaque
        corrupti culpa sequi illum!
      </Typography>
    );
  },
};

export const Body2: Story = {
  render: () => {
    return (
      <Typography variant={"body2"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla
        perspiciatis dolore cum dicta suscipit dolores molestias ea illum, odit
        iste a ab, nemo, ut error inventore! Animi, enim recusandae.
      </Typography>
    );
  },
};

export const Button: Story = {
  render: () => {
    return <Typography variant={"button"}>Button text</Typography>;
  },
};

export const Caption: Story = {
  render: () => {
    return <Typography variant={"caption"}>Caption</Typography>;
  },
};

export const Overline: Story = {
  render: () => {
    return <Typography variant={"overline"}>Text</Typography>;
  },
};
