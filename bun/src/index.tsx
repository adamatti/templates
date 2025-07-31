import Bun from "bun";
import index from "./client/index.html";

const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
    "/api": async req => {
      return new Response("Bun!");
    }
  }
});

console.log(`Listening on http://localhost:${server.port} ...`);