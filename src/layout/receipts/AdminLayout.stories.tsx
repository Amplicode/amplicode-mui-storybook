import { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Stack,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Drawer,
  Button,
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  StepIcon,
} from "@mui/material";
import { useCallback, useState } from "react";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import {
  ArrowDropDown,
  IceSkatingOutlined,
  ImportContacts,
  MenuOpen,
} from "@mui/icons-material";

const meta = {
  title: "Layout/Receipts/AdminLayout",
  // component: Box,
  parameters: {
    layout: "fullscreen",
    controls: {
      exclude: ["divider"],
    },
  },
  decorators: [
    (Story) => {
      return (
        // <Box
        //   sx={(theme) => ({
        //     height: "80vh",
        //     width: "80%",
        //     position: "absolute",
        //     top: 0,
        //     right: 0,
        //     left: 0,
        //     bottom: 0,
        //     margin: "auto",
        //     overflow: "hidden",
        //     overflowY: "auto",
        //     border: "1px solid #3170de",
        //     // color: "#3170de",
        //   })}
        // >
        <Story />
        // </Box>
      );
    },
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    const [open, setOpen] = useState<undefined | false | true>();

    const drawerWidth = 240;

    return (
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: "#fff",
            boxShadow: "inset 0 0 12px 0px #3170de",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color={"#3170de"}>
              Header
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              boxShadow: "inset 0 0 12px 0px #3170de",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            {" "}
            <Typography variant="h6" noWrap component="div" color={"#3170de"}>
              Sidebar
            </Typography>
          </Toolbar>
          <Divider />
          <GenerationInstructions.Exclude>
            <SidebarContent />
          </GenerationInstructions.Exclude>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#fff",
            p: 2,
            boxSizing: "border-box",
            minHeight: "100vh",
          }}
        >
          <Toolbar />
          <GenerationInstructions.Exclude>
            <JustLayoutStoryDescription />
          </GenerationInstructions.Exclude>
        </Box>
      </Box>
    );
  },
};

const SidebarContent = () => {
  return (
    <List>
      {["Menu item 1", "Menu item 2"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MenuOpen />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const JustLayoutStoryDescription = () => {
  return (
    <Box sx={(theme) => ({ p: 2 })}>
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
};
