# DevStack — Build Your Ideal Development Stack

DevStack is a React + TypeScript web app that lets you explore modern frontend,
backend, database, styling, and DevOps technologies, then assemble your own
personal "stack" by adding and removing tools from a curated list. It was
built as a learning project to practice component-driven UI development with
React and TypeScript.

**Live site:** https://devstack-theta.vercel.app
**Repository:** https://github.com/talhabinsaleh/devstack

## Tech Stack

- React 19 + TypeScript
- Vite (build tool & dev server)
- Tailwind CSS v4
- React-Toastify (toast notifications)
- JSON file as the data source (`public/technologies.json`)

## Key Features

1. **Dynamic technology catalog** — 12 technologies across 7 categories are
   loaded asynchronously from a JSON file (not hardcoded), with a loading
   spinner shown while the data is being fetched.
2. **Build-your-stack workflow** — every technology card has an "Add to
   Stack" button that adds the item to a live sidebar, blocks duplicate
   additions with a warning toast, and lets you remove one item or clear the
   whole stack, each with its own toast notification.
3. **Fully responsive, gradient-themed UI** — a single orange → pink → violet
   gradient (defined once in `src/index.css`) drives the brand name, hero
   heading highlight, and primary buttons, and the technology grid reflows
   from 3 columns on desktop to 1 column on mobile, with a mobile hamburger
   navbar.

## React Conceptual Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that lets you write HTML-like markup
directly inside JavaScript/TypeScript code. React uses it because it makes
component structure easy to read and write — instead of calling
`React.createElement(...)` manually, you write markup that gets compiled into
those calls, so the UI structure and the logic that drives it can live
together in one file.

**2. What is the difference between props and state?**
Props are read-only values passed *into* a component from its parent (for
example, `tech` and `onAdd` passed into `TechCard`) — a component cannot
change its own props. State is data a component owns and manages internally
with `useState` (for example, the `stack` array in `App.tsx`), and updating
it causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` lets a functional component hold and update local data between
renders. This project uses it for `technologies` (the fetched list),
`stack` (the technologies the user has added), `loading` (whether the JSON
fetch is still in progress), and `menuOpen` in the Navbar (whether the
mobile menu is expanded).

**4. What does the `useEffect` hook do, and why did you need it to load the
JSON data?**
`useEffect` runs side effects — code that reaches outside of rendering, like
network requests — after a component renders. Fetching `technologies.json`
is a side effect, so it's done inside a `useEffect` in `App.tsx` with an
empty dependency array (`[]`) so it runs exactly once when the app mounts,
rather than on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell list items apart between renders, so it can
figure out which items were added, removed, or reordered without having to
throw away and rebuild the whole list. Without a stable, unique key (this
project uses each technology's `id`), React can misidentify items and either
re-render more than necessary or mix up component state between rows.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same markup. One example is the empty-stack
message in `StackSidebar.tsx`: `{stack.length === 0 ? (<p>No technologies
selected yet...</p>) : (<ul>...</ul>)}` — an empty-state message is shown
only when nothing has been added yet, otherwise the list of selected
technologies is rendered.

**7. How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
A parent passes data down to a child through props, e.g. `App.tsx` passes
`technologies`, `stackIds`, and `onAdd` into `<TechGrid />`, which passes
`tech`, `isAdded`, and `onAdd` further down into `<TechCard />`. A child
sends information back up by calling a function that the parent passed down
as a prop — for example, `TechCard` calls `onAdd(tech)` when its button is
clicked, which runs `handleAdd` back in `App.tsx` and updates the parent's
state.

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
