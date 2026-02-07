# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Coding Challenge: Build a Lightweight useQuery Hook
Task
Create a custom React hook called useQuery that handles data fetching with caching.

Requirements
Fetch data using the provided fetcher function
Return data, error, and isLoading states
Cache responses in memory so repeated calls with the same key don't refetch
—-------------------------------------------------------------------------------------------------------
Deduplicate concurrent requests (if 3 components request the same key simultaneously, only 1 fetch should occur)
Handle key changes properly
Clean up appropriately on unmount

Interface
const { data, error, isLoading } = useQuery(key, fetcher);

Parameters:
key (string) — unique identifier for the request
fetcher (function) — async function that returns the data, receives key as argument
Returns:
data — the resolved data, or undefined
error — the error if request failed, or null
isLoading — true while fetching with no cached data

Example Usage

function Todos({ todoId }) {
const { data, error, isLoading } = useQuery(
`user-${userId}`,
(key) => fetch(`https://dummyjson.com/todos/${todoId}`).then(res => res.json())
);

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
return <h1>{data.name}</h1>;
}

Time
30-40 minutes

Evaluation
You'll be assessed on correctness, handling of edge cases, and code clarity.
