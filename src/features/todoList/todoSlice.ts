import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, AppThunk } from '../../app/store';
import { ToDo } from '../../features/todoList/types';
import { RootState } from '../../app/store';
import { writeTodos, readTodos as fetchTodos } from '../../api/JsonStore';
const initialState: ToDo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    receiveToDos(state, action: PayloadAction<ToDo[]>) {
      return action.payload;
    },
    receiveTodo(state, action: PayloadAction<ToDo>) {
      state.push(action.payload);
    },
    toggleToDo(state, action: PayloadAction<ToDo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleToDo } = todoSlice.actions;

export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  window.history.pushState(null, document.title, `${id}`);
};

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const todos = await fetchTodos();
  dispatch(todoSlice.actions.receiveToDos(todos));
};
export const addToDo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const newToDo: ToDo = {
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
      text: text,
    };

    dispatch(todoSlice.actions.receiveTodo(newToDo));
    writeTodos(getState().todos);
  };
export default todoSlice.reducer;
