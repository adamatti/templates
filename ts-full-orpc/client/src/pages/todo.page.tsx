// https://orpc.unnoq.com/docs/integrations/tanstack-query-old/react#using-react-context
// https://www.npmjs.com/package/@orpc/react-query

import type { Todo } from "@server/types";
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/rpc";

export default function TodoPage() {
  const { data } = useQuery(
    orpc.todo.list.queryOptions({
      input: {
        page: 1,
        limit: 10,
      },
    })
  );

  return (
    <div>
      <b>Todo list:</b>
      {data?.map((todo: Todo) => (
        <div key={todo.id}>- {todo.title}</div>
      ))}
    </div>
  );
}
