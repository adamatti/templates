import type { Todo } from './types';

const tableTodos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
  },
  {
    id: 2,
    title: 'Todo 2',
  },
];

export const list = (): Promise<Todo[]> => {
  return Promise.resolve(tableTodos);
};

export const create = (title: string): Promise<Todo> => {
  const todo = {
    id: tableTodos.length + 1,
    title,
  };
  tableTodos.push(todo);
  return Promise.resolve(todo);
};
