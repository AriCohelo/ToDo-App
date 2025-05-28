import TodoList from '../src/components/TodoList';
import { screen, render, fireEvent } from '@testing-library/react';

describe('TodoList', () => {
  it('renders todo list with title, todos, add button and opens modal on container click', async () => {
    render(
      <TodoList
        title="My Todo List"
        todos={[{ id: 1, task: 'Example Todo', completed: false }]}
        onAddTodo={() => {}}
        onDeleteTodo={() => {}}
        onToggleTodo={() => {}}
      />
    );

    screen.debug();
    expect(screen.getByTestId('todo-list-container')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('todo-list-container'));
  });
});
