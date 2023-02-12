import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, AppThunk } from '../../app/store';
import { ToDo } from '../../features/todoList/types';
import { RootState } from '../../app/store';
import { writeTodos, readTodos as fetchTodos } from '../../api/JsonStore';
interface initialStateInterface {
  toDos: ToDo[];
  error: null | string;
  loading: boolean;
}
const initialState = {
  error: null,
  toDos: [],
  loading: false,
} as initialStateInterface;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    receiveToDos(state, action: PayloadAction<ToDo[]>) {
      state.toDos = action.payload;
      return state.toDos;
    },
    receiveTodo(state, action: PayloadAction<ToDo>) {
      state.toDos.push(action.payload);
    },
    toggleToDo(state, action: PayloadAction<ToDo>) {
      let todo = state.toDos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    loadTodosStart: (state) => {
      state.loading = true;
    },
  },
});

export const { toggleToDo, receiveToDos, receiveTodo, loadTodosStart } =
  todoSlice.actions;

export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  window.history.pushState(null, document.title, `${id}`);
};

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const todos = await fetchTodos();
  dispatch(receiveToDos(todos));
};
export const addToDo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const newToDo: ToDo = {
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
      text: text,
    };

    dispatch(receiveTodo(newToDo));
    writeTodos(getState().todos.toDos);
  };
export default todoSlice.reducer;
