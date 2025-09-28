import { useEffect, useState } from "react";

interface TodoType {
  id: string;
  name: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>(
    JSON.parse(localStorage.getItem("todos") ?? "[]")
  );
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    const newTodo: TodoType = {
      id: Date.now().toString(),
      name: inputValue,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const handleToogleTodo = (todoId: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoId)
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };

        return todo;
      });
    });
  };

  const handleTodoDelete = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      Todo List Component
      <form onSubmit={handleAddTodo}>
        <input
          name="todo name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo: TodoType) => (
          <li key={todo.id}>
            {todo.name}
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToogleTodo(todo.id)}
            />
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
