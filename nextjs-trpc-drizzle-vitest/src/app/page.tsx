"use client";

import { trpc } from "@/client/trpc/client";

export default function Page() {
  const greeting = trpc.hello.useQuery({ text: "Client" });
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
