import React from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  title: string;
  todos: Todo[];
  onAddTodo: () => void;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export default function ToDoList({
  title,
  todos,
  onAddTodo,
  onDeleteTodo,
  onToggleTodo,
}: TodoListProps) {
  return (
    <div data-testid="todo-list-container">
      <textarea placeholder="Title" defaultValue={title} readOnly />
      <ul className="list-none pl-0">
        {todos.map((todo) => (
          <li key={todo.id}>
            <textarea
              defaultValue={todo.task}
              placeholder="Add ToDo"
              readOnly
            />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
            />
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={onAddTodo}>+</button>
    </div>
  );
}
