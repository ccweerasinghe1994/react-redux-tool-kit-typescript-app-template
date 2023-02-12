import { call, put, takeLatest } from 'redux-saga/effects';

function* workerToDoList({ type, payload }) {
  console.log(type);
}

export function* toDoListSaga() {
  yield takeLatest('todos/receiveTodo', workerToDoList);
}
