import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { Box, Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const meta = {
  title: "Utils/Router",
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "react-router-dom" }],
    },
    layout: "centered",
    docs: {
      description: {
        component: `Material UI provides simple wrapper components for CSS transitions. 
                    They help you animate the appearance and disappearance of elements with a consistent API.
                    For more details, see: https://mui.com/material-ui/transitions/
        `,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Routes>
            <Route path="" element={<Story />}></Route>
          </Routes>
        </MemoryRouter>
      );
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const UseNavigate: Story = {
  render: ({ ...props }) => {
    const navigate = useNavigate();

    return (
      <GenerationInstructions.Exclude>
        <Button onClick={() => navigate("#")}>Nav Button</Button>
      </GenerationInstructions.Exclude>
    );
  },
  name: "useNavigate",
  parameters: {
    docsOnly: true,
    studioMeta: {
      kind: "completion",
      keywords: ["nav", "navigate", "link", "goto"],
      npmDeps: [{ name: "react-router-dom" }],
    },
    docs: {
      description: {
        story:
          "Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.",
      },
    },
  },
  tags: ["!dev"],
  args: {},
};

export const Params: Story = {
  render: ({ ...props }) => {
    const params = useParams();

    return (
      <GenerationInstructions.Exclude>
        <Box>{params.id}</Box>
      </GenerationInstructions.Exclude>
    );
  },
  name: "useParams",
  parameters: {
    studioMeta: {
      kind: "completion",
      keywords: ["params", "useParams"],
      npmDeps: [{ name: "react-router-dom" }],
    },
    docs: {
      description: {
        story:
          "Returns an object of key/value-pairs of the dynamic params from the current URL that were matched by the routes. Child routes inherit all params from their parent routes.",
      },
    },
  },
  tags: ["!dev"],
  args: {},
};

export const BrowseRouter: Story = {
  render: ({ ...props }) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Page</div>} />
        </Routes>
      </BrowserRouter>
    );
  },
  name: "BrowseRouter",
  parameters: {
    studioMeta: {
      kind: "completion",
      keywords: ["router", "route"],
      npmDeps: [{ name: "react-router-dom" }],
    },
    docs: {
      description: {
        story:
          "Returns an object of key/value-pairs of the dynamic params from the current URL that were matched by the routes. Child routes inherit all params from their parent routes.",
      },
    },
  },
  tags: ["!dev"],
  args: {},
};
