import { Meta } from '@storybook/addon-docs/blocks';
import * as ComponentsStories from './Components.stories';

<Meta of={ComponentsStories} />

# React Router Components

---

## `<BrowserRouter />`

HTML5 history-based router for standard web apps.

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<div>Home</div>} />
  </Routes>
</BrowserRouter>
```

---

## `<HashRouter />`

Hash-based router for static file hosts.

```tsx
import { HashRouter, Routes, Route } from "react-router-dom";

<HashRouter>
  <Routes>
    <Route path="/" element={<div>Home</div>} />
  </Routes>
</HashRouter>
```

---

## `<MemoryRouter />`

In-memory history (ideal for tests and Storybook).

```tsx
import { MemoryRouter, Routes, Route } from "react-router-dom";

<MemoryRouter initialEntries={['/']}>
  <Routes>
    <Route path="/" element={<div>Home</div>} />
  </Routes>
</MemoryRouter>
```

---

## `<RouterProvider />`

Host a **data router** created by `createBrowserRouter`/`createHashRouter`/`createMemoryRouter`.

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}
```

---

## `<Link />`

`<Link>` renders an accessible navigation anchor that performs client-side navigation without full page reloads.

```tsx
import { Link } from "react-router-dom";

export function Nav() {
  return <Link to="/about">About</Link>;
}
```

**Replace & state**

```tsx
<Link to="/settings" replace state={ from: "home" }>Settings</Link>
```

---

## `<NavLink />`

`<NavLink>` is a special `<Link>` that can style itself as “active” when its `to` matches the current URL.

```tsx
import { NavLink } from "react-router-dom";

<NavLink to="/inbox">Inbox</NavLink>
```

**Active styling**

```tsx
<NavLink
  to="/inbox"
  className={({ isActive }) => (isActive ? "active" : undefined)}
>
  Inbox
</NavLink>
```

---

## `<Navigate />`

`<Navigate>` performs an imperative redirect when it renders.

```tsx
import { Navigate } from "react-router-dom";

<Navigate to="/login" replace />
```

**Conditional redirect**

```tsx
{!user ? <Navigate to="/login" state={ from: location } /> : children}
```

---

## `<Outlet />`

`<Outlet>` renders the matched child route element. Use it in layout routes.

```tsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
```

---

## `<Form />`

`<Form>` submits to a route `action` (data router) without a page reload.

```tsx
import { Form } from "react-router-dom";

<Form method="post" action="/contact">
  <input name="email" type="email" required />
  <button type="submit">Send</button>
</Form>
```

---

## `<Routes>` & `<Route>`

`<Routes>` picks the best match. `<Route>` maps a path to an element (and optionally loaders/actions in data routers).

```tsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

## `<Await />`

`<Await>` renders UI for **deferred data** that resolves later. Pass a promise to `resolve`, wrap with `React.Suspense`, and use `errorElement` to handle rejections.

```tsx
import { Suspense } from "react";
import { Await, useAsyncValue, useAsyncError } from "react-router-dom";

function UserInner() {
  const user = useAsyncValue() as { name: string };
  return <h2>{user.name}</h2>;
}

function UserError() {
  const err = useAsyncError() as Error;
  return <p role="alert">{err.message}</p>;
}

const userPromise = fetch("/api/user").then(r => r.json());

<Suspense fallback={<p>Loading…</p>}>
  <Await resolve={userPromise} errorElement={<UserError />}>
    <UserInner />
  </Await>
</Suspense>
```
