import axios from 'axios';
import { ToDo } from '../features/todoList/types';

const baseUrl =
  'https://www.jsonstore.io/0325ffacd673db762850eb3152b9242526a58eb84933fdd7464dd07b4fc60124';

interface GetTodosResponse {
  result: ToDo[];
  ok: boolean;
}
export const readTodos = async (): Promise<ToDo[]> => {
  const response = await axios.get<GetTodosResponse>(
    baseUrl + window.location.pathname,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  );

  return response.data.result;
};

export const writeTodos = async (todos: ToDo[]) => {
  await axios.put<ToDo[]>(baseUrl + window.location.pathname, todos, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
};
