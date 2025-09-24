import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { replaceOnGenerate } from "@amplicode/storybook-extensions";
import { ArrowDropDown, Menu } from "@mui/icons-material";

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

export const RightSidePersistentSidebar: Story = {
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
        <Content {...{ open, openedDrawerWidth, closedDrawerWidth }} />
        <Sidebar
          {...{ open, openedDrawerWidth, closedDrawerWidth, toggleOpenDrawer }}
        />
      </Box>
    );
  },
};

type CommonProps = {
  open: boolean;
  openedDrawerWidth: number;
  closedDrawerWidth: number;
};

type SidebarProps = CommonProps & {
  toggleOpenDrawer: () => void;
};

function Header({ open, openedDrawerWidth, closedDrawerWidth }: CommonProps) {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        width: open
          ? `calc(100% - ${openedDrawerWidth}px)`
          : `calc(100% - ${closedDrawerWidth}px)`,
        marginRight: open ? `${openedDrawerWidth}px` : `${closedDrawerWidth}px`,
        background: theme.palette.background.default,
        boxShadow: "none",
        border: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: "all 225ms",
      })}
    >
      <Toolbar>
        <img src="vite.svg" alt="" />
      </Toolbar>
    </AppBar>
  );
}

function Sidebar({
  open,
  openedDrawerWidth,
  closedDrawerWidth,
  toggleOpenDrawer,
}: SidebarProps) {
  return (
    <Drawer
      sx={(theme) => ({
        width: open ? openedDrawerWidth : closedDrawerWidth,
        flexShrink: 0,
        transition: "width 225ms",
        overflowX: "hidden",
        "& .MuiDrawer-paper": {
          width: open ? openedDrawerWidth : closedDrawerWidth,
          boxSizing: "border-box",
          transition: "width 225ms",
          background: theme.palette.background.default,

          "[aria-hidden] &": {
            right: 15,
          },
        },
      })}
      variant={"permanent"}
      open={open}
      anchor="right"
    >
      <Toolbar>
        <IconButton
          color="primary"
          size="medium"
          onClick={toggleOpenDrawer}
          sx={(theme) => ({
            position: "absolute",
            left: theme.spacing(1.5),
          })}
        >
          <Menu />
        </IconButton>
      </Toolbar>
      <Divider />
      <Box
        sx={(theme) => ({
          my: theme.spacing(2.5),
          py: 3,
          px: 2,
          overflowX: "hidden",
        })}
      ></Box>
    </Drawer>
  );
}

function Content({ open, openedDrawerWidth, closedDrawerWidth }: CommonProps) {
  return (
    <Box
      component="main"
      sx={{
        width: open
          ? `calc(100% - ${openedDrawerWidth}px)`
          : `calc(100% - ${closedDrawerWidth}px)`,
        flexGrow: 1,
        bgcolor: "#fff",
        padding: 2,
        boxSizing: "border-box",
        minHeight: "100vh",
      }}
    >
      <Toolbar />
      {replaceOnGenerate(<JustLayoutStoryDescription />, <div>Content</div>)}
    </Box>
  );
}

function JustLayoutStoryDescription() {
  return (
    <Box sx={(theme) => ({ px: 2 })}>
      <Typography variant="h6">Admin layout</Typography>
      <Typography variant={"body2"}>
        This type of layout is widely used for admin panels, control panels, and
        other web applications. Its structure allows for easy navigation and
        provides a clean, organized workspace. The layout consists of the
        following key elements:
      </Typography>
      <Box mt={2}>
        <Accordion
        // sx={(theme) => ({ border: "1px solid #3170de" })}
        >
          <AccordionSummary expandIcon={<ArrowDropDown />}>
            <Typography variant={"subtitle2"}>
              Floating Sidebar (Navigation)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ margin: 0, padding: 0, paddingLeft: "16px" }}>
              <li>
                <Typography variant={"subtitle2"}>Position:</Typography>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <li>
                    <Typography variant={"subtitle2"}>
                      Fixed on the left side of the window.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant={"subtitle2"}>Features:</Typography>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <li>
                    <Typography variant={"subtitle2"}>
                      Always visible, regardless of scrolling.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Contains navigation links, icons, or a menu for switching
                      between sections.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Typically has a fixed width (e.g., 250px).
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Can be collapsible for smaller screens or when more
                      content space is needed.
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
        // sx={(theme) => ({ border: "1px solid #3170de" })}
        >
          <AccordionSummary expandIcon={<ArrowDropDown />}>
            <Typography variant={"subtitle2"}>
              Floating Header (Top Bar)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ margin: 0, padding: 0, paddingLeft: "16px" }}>
              <li>
                <Typography variant={"subtitle2"}>Position:</Typography>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <li>
                    <Typography variant={"subtitle2"}>
                      Fixed at the top of the window, spanning the full width of
                      the page.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant={"subtitle2"}>Features:</Typography>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <li>
                    <Typography variant={"subtitle2"}>
                      Contains branding, a search bar, user profile,
                      notifications, or other key actions.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Remains visible during scrolling for quick access.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Height is usually small (e.g., 60px), with position:
                      fixed;.
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
        // sx={(theme) => ({ border: "1px solid #3170de" })}
        >
          <AccordionSummary expandIcon={<ArrowDropDown />}>
            <Typography variant={"subtitle2"}>Main Content Area</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ margin: 0, padding: 0, paddingLeft: "16px" }}>
              <li>
                <Typography variant={"subtitle2"}>Position:</Typography>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <li>
                    <Typography variant={"subtitle2"}>
                      To the right of the sidebar, below the header.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant={"subtitle2"}>Features:</Typography>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <li>
                    <Typography variant={"subtitle2"}>
                      Occupies the remaining screen space after accounting for
                      the sidebar and header.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Scrollable if the content overflows.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Typically has padding to ensure readability and spacing.
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
