import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/tasks";
import Task from "./Task";

const TaskList = () => {
  const {
    status,
    error,
    data: tasks,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <h1>Tasks</h1>
      <pre>{JSON.stringify(tasks, null, 4)}</pre>
      {tasks && tasks.map((task: Task) => <Task key={task._id} task={task} />)}
    </>
  );
};

export default TaskList;
