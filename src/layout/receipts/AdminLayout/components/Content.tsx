import { replaceOnGenerate } from "@amplicode/storybook-extensions";
import { ArrowDropDown } from "@mui/icons-material";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Toolbar,
} from "@mui/material";
import { CommonProps } from "../model/types";

export const Content = ({
  open,
  openedDrawerWidth,
  closedDrawerWidth,
}: CommonProps) => {
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
};

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
