import axios from "axios";

const apiURL = "https://task-manager-server-8l4o.onrender.com";

export const getTasks = async () => {
  try {
    const { data } = await axios.get(`${apiURL}/tasks`);
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const createTask = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  try {
    const { data } = await axios.post(`${apiURL}/tasks`, {
      title,
      description,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};