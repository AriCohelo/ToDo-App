import ToDoList from './components/TodoList';
function App() {
  return (
    <>
      <ToDoList
        title="My Todo List"
        todos={[{ id: 1, task: 'Example Todo', completed: false }]}
        onAddTodo={() => {}}
        onDeleteTodo={() => {}}
        onToggleTodo={() => {}}
      />
    </>
  );
}

export default App;
