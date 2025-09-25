import { createORPCClient, onError } from '@orpc/client';
import type { ContractRouterClient } from '@orpc/contract';
import type { JsonifiedClient } from '@orpc/openapi-client';
import { OpenAPILink } from '@orpc/openapi-client/fetch';
import router from '../src/orpc/router';

const link = new OpenAPILink(router, {
  url: 'http://localhost:3001/api',
  // headers: { Authorization: 'Bearer token' },
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: 'include', // Include cookies for cross-origin requests
    });
  },
  interceptors: [onError((error) => console.error(error))],
});

const client: JsonifiedClient<ContractRouterClient<typeof router>> =
  createORPCClient(link);

async function main() {
  const todos = await client.todo.list({
    page: 1,
    limit: 10,
  });
  console.log(todos);
}

main();
