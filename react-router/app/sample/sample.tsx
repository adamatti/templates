import { data,useSubmit } from "react-router";
import type { Route } from "./+types/sample";
import { Button } from "~/components";
import { useCallback } from "react";

let tasks = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
];

export async function loader({ params }: Route.LoaderArgs) {
  return {
    tasks,
  }  
}

export async function action({
  request,
}: Route.ActionArgs) {  
  const f = await request.formData();
  const action = f.get("action") as string;
  if (action === "add") {
    const name = f.get("name") as string;
    const id = tasks.length + 1;
    tasks.push({ id, name: `${name} ${id}` });
  } else if (action === "remove") {
    const id = f.get("id") as string;
    tasks = tasks.filter((task) => task.id !== parseInt(id));
  }
  return data({ status: "ok" });
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function Sample({loaderData}: Route.ComponentProps) {
  const { tasks } = loaderData;
  const submit = useSubmit();

  const submitEvent = useCallback((event: any) => {
    return submit(event, { method: "post" });
  }, [submit]);
  
  return (
   <div>
    {tasks.map((task) => (
      <div key={task.id}>
        {task.id} - {task.name} - 
        <Button onClick={() => submitEvent({ action: "remove", id: task.id })}>Delete</Button>
      </div>
    ))}
    <Button 
      onClick={() => submitEvent({ action: "add", name: "Task" })}>
      Add Task
    </Button>
   </div>
  );
}
