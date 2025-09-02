import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
} from "@mui/material";
import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

const meta = {
  title: "Layout/Templates/AdminLayout",
  parameters: {
    layout: "fullscreen",
    controls: {
      exclude: ["divider"],
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    const [open, setOpen] = useState<false | true>(true);

    const openedDrawerWidth = 240;
    const closedDrawerWidth = 64;

    const toggleOpenDrawer = () => {
      setOpen((prevState) => !prevState);
    };

    return (
      <Box sx={{ display: "flex" }}>
        <Header {...{ open, openedDrawerWidth, closedDrawerWidth }} />
        <Sidebar
          {...{ open, openedDrawerWidth, closedDrawerWidth, toggleOpenDrawer }}
        />
        <Content {...{ open, openedDrawerWidth, closedDrawerWidth }} />
      </Box>
    );
  },
};

