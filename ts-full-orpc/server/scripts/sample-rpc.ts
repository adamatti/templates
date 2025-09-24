import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import type router from '../src/orpc/router';

const link = new RPCLink({
  url: 'http://localhost:3000/rpc',
  // headers: { Authorization: 'Bearer token' },
});

const client: RouterClient<typeof router> = createORPCClient(link);

async function main() {
  const todos = await client.todo.list({
    page: 1,
    limit: 10,
  });
  console.log(todos);
}

main();
