import "./App.css";
import useQuery from "./hooks/use-Query";
import { useState } from "react";

function Todo({ todoId }) {
  const { data, isLoading, error, refetch } = useQuery(
    `todo-${todoId}`,
    (key) =>
      fetch(`https://dummyjson.com/todos/${todoId}`).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;
  if (data)
    return (
      <span>
        {data?.todo}
        <button onClick={refetch}>Refetch</button>
      </span>
    );
}

function App() {
  const [todoId, setTodoId] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <h2>useQuery Demo</h2>

      <button onClick={() => setTodoId(1)}>Todo 1</button>
      <button onClick={() => setTodoId(2)}>Todo 2</button>
      <button onClick={() => setTodoId(3)}>Todo 3</button>

      <hr />

      <h3>Component A</h3>
      <Todo todoId={todoId} />

      <h3>Component B</h3>
      <Todo todoId={todoId} />

      <h3>Component C</h3>
      <Todo todoId={todoId} />
    </div>
  );
}

export default App;
