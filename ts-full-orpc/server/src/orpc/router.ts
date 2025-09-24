import { os } from '@orpc/server';
import { z } from 'zod';
import logger from '../logger';

const tableTodos = [
  {
    id: 1,
    title: 'Todo 1',
  },
  {
    id: 2,
    title: 'Todo 2',
  },
];

const list = os
  .route({
    operationId: 'todo.list',
    summary: 'List todos',
    description: 'List todos description',
    deprecated: false,
    tags: ['todo'],
    path: '/todos',
    method: 'GET',
  })
  .input(
    z.object({
      page: z.number().default(1),
      limit: z.number().default(10),
    })
  )
  .output(
    z.array(
      z.object({
        id: z.number(),
        title: z.string(),
      })
    )
  )
  .handler(({ input }) => {
    logger.debug('todo.list called', { input });
    return tableTodos;
  });

const create = os
  .route({
    operationId: 'todo.create',
    summary: 'Create todo',
    description: 'Create todo description',
    deprecated: false,
    tags: ['todo'],
    path: '/todos',
    method: 'POST',
  })
  .input(
    z.object({
      title: z.string(),
    })
  )
  .handler(({ input }) => {
    const todo = {
      id: tableTodos.length + 1,
      title: input.title,
    };
    tableTodos.push(todo);
    return {
      todo,
    };
  });

export default {
  todo: {
    list,
    create,
  },
};
