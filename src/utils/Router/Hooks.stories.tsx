// Auto-generated React Router hooks stories
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { Box, Button, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  useNavigation,
  useParams,
  useSearchParams,
  useLocation,
  useRoutes,
  // Data APIs below often require a Data Router context; mark as docsOnly in stories
  useLoaderData,
  useActionData,
  useRouteLoaderData,
  useFetcher,
  useFetchers,
  useSubmit,
  useRevalidator,
  useRouteError,
  useMatches,
  useMatch,
  useResolvedPath,
  useHref,
  useLinkClickHandler,
  useInRouterContext,
  useOutlet,
  useOutletContext,
  useNavigationType,
  useBeforeUnload,
  useFormAction,
  useViewTransitionState,
  useAsyncValue,
  useAsyncError,
} from "react-router-dom";

const meta = {
  title: "Utils/Router/Hooks",
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "react-router-dom" }],
    },
    layout: "centered",
    docs: {
      description: {
        component:
          "Stories demonstrating React Router hooks usage. Some stories are marked docsOnly because data APIs require a Data Router context (loaders/actions).",
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
  tags: ["anchor"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const UseNavigate: Story = {
  render: () => {
    const navigate = useNavigate();
    return (
      <GenerationInstructions.Exclude>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </GenerationInstructions.Exclude>
    );
  },
  parameters: {
    studioMeta: { label: "UseNavigate", kind: "completion", keywords: ["navigate", "link", "goto"] },
    docs: { description: { story: "Returns a function to navigate programmatically." } },
  },
  tags: ["!dev"],
};

export const UseNavigation: Story = {
  render: () => {
    const navigation = useNavigation();
    return <Box>state: {navigation.state}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseNavigation", kind: "completion", keywords: ["navigation", "pending", "state"] },
    docs: { description: { story: "Current navigation state: idle | submitting | loading." } },
  },
  tags: ["!dev"],
};

export const UseParams: Story = {
  render: () => {
    const params = useParams();
    return (
      <GenerationInstructions.Exclude>
        <Box>params: {JSON.stringify(params)}</Box>
      </GenerationInstructions.Exclude>
    );
  },
  parameters: {
    studioMeta: { label: "UseParams", kind: "completion", keywords: ["params", "route", "url", "location"] },
    docs: { description: { story: "Key/value pairs of dynamic params matched by the route." } },
  },
  tags: ["!dev"],
};

export const UseSearchParams: Story = {
  render: () => {
    const [sp, setSp] = useSearchParams();
    return (
      <GenerationInstructions.Exclude>
        <Button onClick={() => setSp({ tab: sp.get("tab") === "1" ? "2" : "1" })}>
          Toggle tab (current: {sp.get("tab") ?? "none"})
        </Button>
      </GenerationInstructions.Exclude>
    );
  },
  parameters: {
    studioMeta: { label: "UseSearchParams", kind: "completion", keywords: ["search", "querystring", "URLSearchParams"] },
    docs: { description: { story: "Read and update the URL query string." } },
  },
  tags: ["!dev"],
};

export const UseLocation: Story = {
  render: () => {
    const loc = useLocation();
    return <Box>{loc.pathname + loc.search}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseLocation", kind: "completion", keywords: ["location", "pathname", "search"] },
    docs: { description: { story: "Access the current location object." } },
  },
  tags: ["!dev"],
};

export const UseRoutes: Story = {
  render: (): any => {
    let element = useRoutes([
      {
        path: "/",
        element: (
          <Box>
            <Typography variant="h2">Dashboard</Typography>
          </Box>
        ),
        children: [
          {
            path: "messages",
            element: (
              <Box>
                <Typography variant="h2">DashboardMessages</Typography>
              </Box>
            ),
          },
          {
            path: "tasks",
            element: (
              <Box>
                <Typography variant="h2">DashboardTasks</Typography>
              </Box>
            ),
          },
        ],
      },
      {
        path: "team",
        element: (
          <Box>
            <Typography variant="h2">AboutPage</Typography>
          </Box>
        ),
      },
    ]);
    return element;
  },
  parameters: {
    studioMeta: { label: "UseRoutes", kind: "completion", keywords: ["routes", "route objects"] },
    docs: { description: { story: "Hook alternative to <Routes> using route objects." } },
  },
  tags: ["!dev"],
};

export const UseLoaderData: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseLoaderData", kind: "completion", keywords: ["loader", "data"] },
    docs: { description: { story: "Returns data from the closest route loader/clientLoader." } },
  },
  tags: ["!dev"],
};

export const UseActionData: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseActionData", kind: "completion", keywords: ["action", "form", "post"] },
    docs: { description: { story: "Data from the most recent POST to the route’s action." } },
  },
  tags: ["!dev"],
};

export const UseRouteLoaderData: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseRouteLoaderData", kind: "completion", keywords: ["loader", "route id"] },
    docs: { description: { story: "Access loader data of any rendered route by its ID." } },
  },
  tags: ["!dev"],
};

export const UseFetcher: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseFetcher", kind: "completion", keywords: ["fetcher", "background", "form"] },
    docs: { description: { story: "Run loaders/actions without navigation." } },
  },
  tags: ["!dev"],
};

export const UseFetchers: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseFetchers", kind: "completion", keywords: ["fetchers", "loading indicator"] },
    docs: { description: { story: "Read all active fetchers for global UI." } },
  },
  tags: ["!dev"],
};

export const UseSubmit: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseSubmit", kind: "completion", keywords: ["submit", "formdata"] },
    docs: { description: { story: "Programmatically submit forms or FormData to actions." } },
  },
  tags: ["!dev"],
};

export const UseRevalidator: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseRevalidator", kind: "completion", keywords: ["revalidate", "loader", "data"] },
    docs: { description: { story: "Manually revalidate nearest route data (reruns loaders)." } },
  },
  tags: ["!dev"],
};

export const UseRouteError: Story = {
  render: () => <Box>See docs tab for example usage.</Box>,
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseRouteError", kind: "completion", keywords: ["error", "boundary"] },
    docs: { description: { story: "Access the error caught by the nearest route error boundary." } },
  },
  tags: ["!dev"],
};

export const UseMatches: Story = {
  render: () => {
    const matches = useMatches();
    return <Box>{matches.map((m) => m.id).join(" › ") || "no matches"}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseMatches", kind: "completion", keywords: ["matches", "breadcrumbs"] },
    docs: { description: { story: "Array describing all matched routes." } },
  },
  tags: ["!dev"],
};

export const UseMatch: Story = {
  render: () => {
    const match = useMatch("/settings/*");
    return <Box>Match: {match ? "yes" : "no"}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseMatch", kind: "completion", keywords: ["match", "pattern"] },
    docs: { description: { story: "Test current URL against a path pattern." } },
  },
  tags: ["!dev"],
};

export const UseResolvedPath: Story = {
  render: () => {
    const p = useResolvedPath("../profile");
    return <Box>{p.pathname}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseResolvedPath", kind: "completion", keywords: ["resolve", "path"] },
    docs: { description: { story: "Resolve a relative path against the current route." } },
  },
  tags: ["!dev"],
};

export const UseHref: Story = {
  render: () => {
    const href = useHref("/docs");
    return (
      <GenerationInstructions.Exclude>
        <a href={href}>Raw anchor to {href}</a>
      </GenerationInstructions.Exclude>
    );
  },
  parameters: {
    studioMeta: { label: "UseHref", kind: "completion", keywords: ["href", "link"] },
    docs: { description: { story: "Create absolute href for a target location." } },
  },
  tags: ["!dev"],
};

export const UseLinkClickHandler: Story = {
  render: () => {
    const onClick = useLinkClickHandler("/profile");
    return (
      <GenerationInstructions.Exclude>
        <a href="/profile" onClick={onClick}>Go to profile</a>
      </GenerationInstructions.Exclude>
    );
  },
  parameters: {
    studioMeta: { label: "UseLinkClickHandler", kind: "completion", keywords: ["link", "click handler"] },
    docs: { description: { story: "Get a click handler that performs router navigation." } },
  },
  tags: ["!dev"],
};

export const UseInRouterContext: Story = {
  render: () => {
    const ok = useInRouterContext();
    return <Box>In router: {ok ? "true" : "false"}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseInRouterContext", kind: "completion", keywords: ["context", "router"] },
    docs: { description: { story: "Returns true if called inside a router provider." } },
  },
  tags: ["!dev"],
};

export const UseOutlet: Story = {
  render: () => {
    const outlet = useOutlet();
    return <Box>{outlet ?? "No child route rendered"}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseOutlet", kind: "completion", keywords: ["outlet", "nested routes"] },
    docs: { description: { story: "Render the element for the current route’s child." } },
  },
  tags: ["!dev"],
};

export const UseOutletContext: Story = {
  render: () => {
    type Ctx = { user: { name: string } };
    const ctx = useOutletContext<Ctx | undefined>();
    return <Box>ctx: {JSON.stringify(ctx)}</Box>;
  },
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseOutletContext", kind: "completion", keywords: ["outlet context"] },
    docs: { description: { story: "Access context passed via <Outlet context={...}/>." } },
  },
  tags: ["!dev"],
};

export const UseNavigationType: Story = {
  render: () => {
    const t = useNavigationType();
    return <Box>type: {t}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseNavigationType", kind: "completion", keywords: ["navigation type", "POP", "PUSH", "REPLACE"] },
    docs: { description: { story: "How the user reached the current location." } },
  },
  tags: ["!dev"],
};

export const UseBeforeUnload: Story = {
  render: () => {
    useBeforeUnload((e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    });
    return <Box>Registered beforeunload listener (example)</Box>;
  },
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseBeforeUnload", kind: "completion", keywords: ["beforeunload", "confirm leave"] },
    docs: { description: { story: "Run logic before the page is unloaded." } },
  },
  tags: ["!dev"],
};

export const UseFormAction: Story = {
  render: () => {
    const action = useFormAction("/posts/1/reply");
    return <Box>action: {action}</Box>;
  },
  parameters: {
    studioMeta: { label: "UseFormAction", kind: "completion", keywords: ["form action", "action url"] },
    docs: { description: { story: "Compute the action URL for a <Form> submission." } },
  },
  tags: ["!dev"],
};

export const UseViewTransitionState: Story = {
  render: () => {
    const transitioning = useViewTransitionState("/target");
    return (
      <GenerationInstructions.Exclude>
        <Link to="/target" viewTransition className={transitioning ? "is-transitioning" : ""}>
          Open target
        </Link>
      </GenerationInstructions.Exclude>
    );
  },
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseViewTransitionState", kind: "completion", keywords: ["view transition", "animation"] },
    docs: { description: { story: "true while a View Transition to a location is active." } },
  },
  tags: ["!dev"],
};

export const UseAsyncValue: Story = {
  render: () => {
    const user = useAsyncValue() as { name: string };
    return <Typography variant="body2">{user.name}</Typography>;
  },
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseAsyncValue", kind: "completion", keywords: ["Await", "deferred"] },
    docs: { description: { story: "Read the resolved value inside an <Await> boundary." } },
  },
  tags: ["!dev"],
};

export const UseAsyncError: Story = {
  render: () => {
    const err = useAsyncError() as Error;
    return <Typography variant="body2" color="error">{err.message}</Typography>;
  },
  parameters: {
    docsOnly: true,
    studioMeta: { label: "UseAsyncError", kind: "completion", keywords: ["Await", "deferred", "error"] },
    docs: { description: { story: "Read the error from an <Await> boundary." } },
  },
  tags: ["!dev"],
};

export const BrowserRouterExample: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Page</div>} />
        </Routes>
      </BrowserRouter>
    );
  },
  parameters: {
    studioMeta: {
      label: "BrowserRouterExample",
      kind: "completion",
      keywords: ["browserrouter", "router"],
      npmDeps: [{ name: "react-router-dom" }],
    },
    docs: { description: { story: "Minimal <BrowserRouter> setup with a single route." } },
  },
  tags: ["!dev"],
};