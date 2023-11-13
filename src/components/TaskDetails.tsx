import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams();

  return (
    <>
      <div>task id: {taskId}</div>
    </>
  );
};

export default TaskDetails;
