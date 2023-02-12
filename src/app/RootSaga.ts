import { all, call } from 'redux-saga/effects';
import { toDoListSaga } from '../features/todoList/ToDoListSaga';

export default function* rootSaga() {
  yield all([call(toDoListSaga)]);
}
