import { os } from '@orpc/server';
import { z } from 'zod';
import logger from '../logger';
import { TodoService } from '../service';

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
  .handler(async ({ input }) => {
    logger.debug('todo.list called', { input });
    return await TodoService.list();
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
  .handler(async ({ input }) => {
    const todo = await TodoService.create(input.title);
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
