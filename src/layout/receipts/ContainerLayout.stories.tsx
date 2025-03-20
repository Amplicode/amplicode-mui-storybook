import { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Stack,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Toolbar,
} from "@mui/material";
import { replaceOnGenerate } from "@amplicode/storybook-extensions";
import { ArrowDropDown } from "@mui/icons-material";

const meta = {
  title: "Layout/Templates/ContainerLayout",
  // component: Box,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <Stack
        direction="column"
        sx={(theme) => ({
          width: "100%",
          height: replaceOnGenerate("100vh", "100vh"),
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            minHeight: theme.spacing(10),
            background: "#fff",
            boxShadow: "inset 0 0 12px 0px #3170de",
            position: "sticky",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 9,
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color={"#3170de"}>
              Header
            </Typography>
          </Toolbar>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            borderLeft: "1px solid #3170de",
            borderRight: "1px solid #3170de",
          })}
        >
          <Container fixed sx={(theme) => ({ height: "100%" })}>
            {replaceOnGenerate(
              <Box
                sx={(theme) => ({
                  height: "100%",
                  boxSizing: "border-box",
                  background: "#fff",
                })}
              >
                <JustLayoutStoryDescription />
              </Box>,
              <Typography variant="subtitle2" textAlign="center">
                Content
              </Typography>
            )}
          </Container>
        </Box>
        <Box
          sx={(theme) => ({
            boxShadow: "inset 0 0 12px 1px #3170de",
            py: 2,
            background: "#fff",
          })}
        >
          <Typography variant={"subtitle2"} textAlign={"center"}>
            Footer ©
          </Typography>
        </Box>
      </Stack>
    );
  },
};

const JustLayoutStoryDescription = () => {
  return (
    <Box sx={(theme) => ({ p: 2 })}>
      <Typography variant="h6">
        Container layout is a classic web page layout
      </Typography>
      <Typography variant={"body2"}>
        This type of layout is often used for creating clean and functional web
        page designs. Its main elements are:
      </Typography>
      <Box mt={2}>
        <Accordion
        // sx={(theme) => ({ border: "1px solid #3170de" })}
        >
          <AccordionSummary expandIcon={<ArrowDropDown />}>
            <Typography variant={"subtitle2"}>Floating Header</Typography>
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
                      Fixed at the top of the browser window.
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
                      Always visible, regardless of page scrolling.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Typically contains a logo, navigation menu, or search bar.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Achieved using the position: fixed; property.
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
            <Typography variant={"subtitle2"}>Centered Content Area</Typography>
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
                      Occupies the main space between the header and the footer.
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
                      Horizontally and vertically centered in the remaining
                      window space.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      May have fixed width and height or use proportional
                      dimensions.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Scrollable if the content overflows.
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
              Footer Stuck to the Bottom
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
                      Fixed at the bottom of the browser window.
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
                      Always at the bottom of the window, regardless of content
                      height.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"subtitle2"}>
                      Often contains copyright information, links, or contact
                      details.
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
