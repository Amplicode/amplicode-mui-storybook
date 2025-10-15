import type { Meta, StoryObj } from "@storybook/react-vite";
import { Suspense } from "react";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Form,
  createMemoryRouter,
  RouterProvider,
  Await,
  useAsyncValue,
  useAsyncError,
} from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { replaceOnGenerate } from "@amplicode/storybook-extensions";
import { Layout, TourInfo } from "./Layout";
import {
  Subtitle,
  Stories,
  Title,
  Description,
} from "@storybook/addon-docs/blocks";

const meta = {
  title: "Utils/Router/Components",
  parameters: {
    studioMeta: { npmDeps: [{ name: "react-router-dom" }] },
    layout: "fullscreen",
    docs: {
      description: {
        component: `Routes are configured by rendering <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> that couple URL segments to UI elements.`,
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
  },
  // tags: ["anchor"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const BrowserRouterBasic: Story = {
  render: () => {
    return replaceOnGenerate(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<Layout routerType="browser" />}>
            <Route
              path="/"
              element={
                <Typography variant="h4" mt={2}>
                  Home Page
                </Typography>
              }
            />
            <Route path="tours">
              <Route
                index
                element={
                  <Typography variant="h4" mt={2}>
                    Tours Page
                  </Typography>
                }
              />
              <Route path=":id" element={<TourInfo />} />
            </Route>
            <Route
              path="contacts"
              element={
                <Typography variant="h4" mt={2}>
                  Contacts Page
                </Typography>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>,
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Typography variant="h4" mt={2}>
                Home Page
              </Typography>
            }
          />
          <Route path="tours">
            <Route
              index
              element={
                <Typography variant="h4" mt={2}>
                  Tours Page
                </Typography>
              }
            />
            <Route path=":id" element={<div></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  },
  parameters: {
    docsOnly: true,
    studioMeta: {
      label: "BrowserRouter",
      kind: "completion",
      keywords: ["browserrouter", "router"],
    },
    docs: {
      description: {
        story: `A declarative <code>&lt;Router&gt;</code> using the browser History API for client-side routing.`,
      },
    },
  },
  // tags: ["!dev"],
};

export const HashRouterBasic: Story = {
  render: () => {
    return replaceOnGenerate(
      <HashRouter>
        <Routes>
          <Route element={<Layout routerType="hash" />}>
            <Route
              index
              element={
                <Typography variant="h4" mt={2}>
                  Home Page
                </Typography>
              }
            />
            <Route path="tours">
              <Route
                index
                element={
                  <Typography variant="h4" mt={2}>
                    Tours Page
                  </Typography>
                }
              />
              <Route path=":id" element={<TourInfo />} />
            </Route>
            <Route
              path="contacts"
              element={
                <Typography variant="h4" mt={2}>
                  Contacts Page
                </Typography>
              }
            />
          </Route>
        </Routes>
      </HashRouter>,
      <HashRouter>
        <Routes>
          <Route
            index
            element={
              <Typography variant="h4" mt={2}>
                Home Page
              </Typography>
            }
          />
          <Route path="tours">
            <Route
              index
              element={
                <Typography variant="h4" mt={2}>
                  Tours Page
                </Typography>
              }
            />
            <Route path=":id" element={<div></div>} />
          </Route>
        </Routes>
      </HashRouter>
    );
  },
  parameters: {
    docsOnly: true,
    studioMeta: {
      label: "HashRouterBasic",
      kind: "completion",
      keywords: ["hashrouter", "router"],
    },
    docs: {
      description: {
        story:
          "A declarative <Router> that stores the location in the hash portion of the URL so it is not sent to the server.",
      },
    },
  },
  tags: [],
};

export const MemoryRouterBasic: Story = {
  render: () => {
    return replaceOnGenerate(
      <MemoryRouter>
        <Routes>
          <Route element={<Layout routerType="memory" />}>
            <Route
              index
              element={
                <Typography variant="h4" mt={2}>
                  Home Page
                </Typography>
              }
            />
            <Route path="tours">
              <Route
                index
                element={
                  <Typography variant="h4" mt={2}>
                    Tours Page
                  </Typography>
                }
              />
              <Route path=":id" element={<TourInfo />} />
            </Route>
            <Route
              path="contacts"
              element={
                <Typography variant="h4" mt={2}>
                  Contacts Page
                </Typography>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>,
      <MemoryRouter>
        <Routes>
          <Route
            index
            element={
              <Typography variant="h4" mt={2}>
                Home Page
              </Typography>
            }
          />
          <Route path="tours">
            <Route
              index
              element={
                <Typography variant="h4" mt={2}>
                  Tours Page
                </Typography>
              }
            />
            <Route path=":id" element={<div></div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  },
  parameters: {
    studioMeta: {
      label: "MemoryRouterBasic",
      kind: "completion",
      keywords: ["memoryrouter"],
    },
    docs: {
      description: {
        story: "In-memory history (ideal for tests and Storybook).",
      },
    },
  },
  tags: [""],
};

// export const RouterProviderBasic: Story = {
//   render: () => {
//     const router = createMemoryRouter(
//       [
//         { path: "/", element: <div>Home</div> },
//         { path: "/about", element: <div>About</div> },
//       ],
//       { initialEntries: ["/"] }
//     );
//     return <RouterProvider router={router} />;
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "RouterProviderBasic",
//       kind: "completion",
//       keywords: ["routerprovider", "data router"],
//     },
//     docs: {
//       description: { story: "Use with createMemoryRouter in Storybook." },
//     },
//   },
//   tags: ["!dev"],
// };

// export const LinkBasic: Story = {
//   render: () => <Link to="/about">About</Link>,
//   parameters: {
//     studioMeta: {
//       label: "LinkBasic",
//       kind: "completion",
//       keywords: ["link", "anchor", "to"],
//     },
//     docs: { description: { story: "Basic client-side navigation link." } },
//   },
//   tags: ["!dev"],
// };

// export const LinkReplaceAndState: Story = {
//   render: () => {
//     return (
//       <Link to="/settings" replace state={{ from: "home" }}>
//         Settings
//       </Link>
//     );
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "LinkReplaceAndState",
//       kind: "completion",
//       keywords: ["replace", "state"],
//     },
//     docs: {
//       description: {
//         story: "Replace history entry and attach location state.",
//       },
//     },
//   },
//   tags: ["!dev"],
// };

// export const NavLinkBasic: Story = {
//   render: () => <NavLink to="/inbox">Inbox</NavLink>,
//   parameters: {
//     studioMeta: {
//       label: "NavLinkBasic",
//       kind: "completion",
//       keywords: ["navlink", "active"],
//     },
//     docs: { description: { story: "Renders as active when URL matches." } },
//   },
//   tags: ["!dev"],
// };

// export const NavLinkActiveClass: Story = {
//   render: () => {
//     return (
//       <NavLink
//         to="/inbox"
//         className={({ isActive }) => (isActive ? "active" : undefined)}
//       >
//         Inbox
//       </NavLink>
//     );
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "NavLinkActiveClass",
//       kind: "completion",
//       keywords: ["className", "isActive"],
//     },
//     docs: {
//       description: { story: "Use function className to style active state." },
//     },
//   },
//   tags: ["!dev"],
// };

// export const NavigateBasic: Story = {
//   render: () => <Navigate to="/login" replace />,
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "NavigateBasic",
//       kind: "completion",
//       keywords: ["redirect", "replace"],
//     },
//     docs: { description: { story: "Imperatively redirect to another route." } },
//   },
//   tags: ["!dev"],
// };

// export const OutletBasic: Story = {
//   render: () => {
//     return (
//       <div>
//         Parent Layout
//         <Outlet />
//       </div>
//     );
//   },
//   parameters: {
//     studioMeta: {
//       label: "OutletBasic",
//       kind: "completion",
//       keywords: ["outlet", "nested"],
//     },
//     docs: {
//       description: { story: "Use in layouts to render nested child routes." },
//     },
//   },
//   tags: ["!dev"],
// };

// export const FormBasic: Story = {
//   render: () => {
//     return (
//       <Form method="post" action="/contact">
//         <input name="email" type="email" required />
//         <button type="submit">Send</button>
//       </Form>
//     );
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "FormBasic",
//       kind: "completion",
//       keywords: ["form", "action", "post"],
//     },
//     docs: {
//       description: {
//         story: "Requires a route action (data router) to handle submission.",
//       },
//     },
//   },
//   tags: ["!dev"],
// };

// export const RoutesRouteBasic: Story = {
//   render: () => {
//     return (
//       <Routes>
//         <Route path="/" element={<div>Home</div>} />
//         <Route path="/about" element={<div>About</div>} />
//       </Routes>
//     );
//   },
//   parameters: {
//     studioMeta: {
//       label: "RoutesRouteBasic",
//       kind: "completion",
//       keywords: ["routes", "route"],
//     },
//     docs: {
//       description: {
//         story: "Map paths to elements with nested routes support.",
//       },
//     },
//   },
//   tags: ["!dev"],
// };

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
// function makeData<T>(value: T, ms = 600) {
//   return delay(ms).then(() => value);
// }
// function makeError(message = "Network error", ms = 600) {
//   return delay(ms).then(() => {
//     throw new Error(message);
//   });
// }

// function UserInner() {
//   const user = useAsyncValue() as { name: string };
//   return <Box component="pre">{JSON.stringify(user, null, 2)}</Box>;
// }
// function UserError() {
//   const err = useAsyncError() as Error;
//   return <Box role="alert">Error: {err.message}</Box>;
// }

// export const AwaitBasic: Story = {
//   render: () => {
//     const promise = makeData({ name: "Ada Lovelace" });
//     return (
//       <Suspense fallback={<Box>Loading user…</Box>}>
//         <Await
//           resolve={promise}
//           errorElement={<Box role="alert">Failed to load</Box>}
//         >
//           <UserInner />
//         </Await>
//       </Suspense>
//     );
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "AwaitBasic",
//       kind: "completion",
//       keywords: ["await", "defer", "suspense"],
//     },
//     docs: {
//       description: {
//         story: "Basic `<Await>` example resolving a mocked Promise.",
//       },
//     },
//   },
//   tags: ["!dev"],
// };

// export const AwaitWithErrorElement: Story = {
//   render: () => {
//     const promise = makeError("User not found");
//     return (
//       <Suspense fallback={<Box>Loading user…</Box>}>
//         <Await resolve={promise} errorElement={<UserError />}>
//           <UserInner />
//         </Await>
//       </Suspense>
//     );
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "AwaitWithErrorElement",
//       kind: "completion",
//       keywords: ["error", "useAsyncError"],
//     },
//     docs: {
//       description: {
//         story: "Use a custom error element with `useAsyncError()`.",
//       },
//     },
//   },
//   tags: ["!dev"],
// };

// export const AwaitMultiple: Story = {
//   render: () => {
//     const userP = makeData({ name: "Grace Hopper" }, 400);
//     const statsP = makeData({ commits: 4242 }, 800);

//     function StatsInner() {
//       const stats = useAsyncValue() as { commits: number };
//       return <Box component="pre">{JSON.stringify(stats, null, 2)}</Box>;
//     }

//     return (
//       <Box sx={{ display: "grid", gap: 2, minWidth: 360 }}>
//         <Suspense fallback={<Box>Loading user…</Box>}>
//           <Await resolve={userP} errorElement={<Box>Couldn’t load user</Box>}>
//             <UserInner />
//           </Await>
//         </Suspense>

//         <Suspense fallback={<Box>Loading stats…</Box>}>
//           <Await resolve={statsP} errorElement={<Box>Couldn’t load stats</Box>}>
//             <StatsInner />
//           </Await>
//         </Suspense>
//       </Box>
//     );
//   },
//   parameters: {
//     docsOnly: true,
//     studioMeta: {
//       label: "AwaitMultiple",
//       kind: "completion",
//       keywords: ["await", "multiple", "dashboard"],
//     },
//     docs: {
//       description: {
//         story: "Multiple `<Await>` blocks with separate fallbacks.",
//       },
//     },
//   },
//   tags: ["!dev"],
// };
