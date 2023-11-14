import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { getTask } from '../services/tasks';

const TaskDetails = () => {
  const { taskId } = useParams();

  const {
    status,
    error,
    data,
  } = useQuery({
    queryKey: ['tasks', taskId],
    queryFn: () => getTask(taskId || ''),
  })

  return (
    <>
      {status === 'pending' && (<h1>Loading...</h1>)}
      {status === 'error' && (<h1>{JSON.stringify(error)}</h1>)}
      {data && (
        <div>
          <h1>task id: {taskId}</h1>
          <h2>{data.title}</h2>
          <h3>{data.description}</h3>
        </div>
      )} 
    </>
  );
};

export default TaskDetails;
