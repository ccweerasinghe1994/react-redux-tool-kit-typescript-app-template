import TodoList from '../features/todoList/ToDoList';
import AddToDo from '../features/todoList/AddToDo';
import Footer from '../features/visibilityFilter/Footer';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { createTodoList, loadTodos } from '../features/todoList/todoSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (window.location.pathname === '/') {
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);
  return (
    <div>
      <AddToDo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
