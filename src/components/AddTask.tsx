import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useRef } from "react";
import { createTask } from "../services/tasks";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: (newTask: Task) => {
      queryClient.setQueryData(["tasks", newTask._id], newTask);
      navigate(`/tasks/${newTask._id}`);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
    });
  };

  return (
    <>
      <div>Add Task</div>
      {status === "error" && JSON.stringify(error)}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} />
        <input type="text" ref={descriptionRef} />
        <button>Add Task</button>
      </form>
    </>
  );
};

export default AddTask;
