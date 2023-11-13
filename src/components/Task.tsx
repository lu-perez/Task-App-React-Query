import { Link } from "react-router-dom";

type TaskProps = {
  task: Task;
};

const Task = ({ task }: TaskProps) => {
  return (
    <Link to={`/task/${task._id}`}>
      <h3>{task.title}</h3>
      <h4>{task.description}</h4>
    </Link>
  );
};

export default Task;
