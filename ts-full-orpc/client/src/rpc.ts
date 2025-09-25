import { createORPCClient, onError } from "@orpc/client";
import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import contract from "@server/contract.json" with { type: "json" };
import type { router } from "@server/types";

const link = new OpenAPILink(contract as unknown as typeof router, {
  url: "http://localhost:3001/api", // FIXME should be from env
  // headers: { Authorization: 'Bearer token' },
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: "include", // Include cookies for cross-origin requests
    });
  },
  interceptors: [onError((error) => console.error(error))],
});

const client: JsonifiedClient<ContractRouterClient<typeof router>> =
  createORPCClient(link);
export const orpc = createORPCReactQueryUtils(client);
