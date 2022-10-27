import React from 'react';
import TodoListItem from './ToDoListItem';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleToDo } from '../../features/todoList/todoSlice';
import { VisibilityFilter } from '../visibilityFilter/visibilityFilterSlice';
import { ToDo } from '../todoList/types';
const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleToDo(todo))}
        />
      ))}
    </ul>
  );
};

export default TodoList;

const getVisibleTodos = (todos: ToDo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};
