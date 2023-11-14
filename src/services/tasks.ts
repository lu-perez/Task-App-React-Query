import axios from "axios";

const apiURL = "https://task-manager-server-8l4o.onrender.com/tasks";

export const getTasks = async () => {
  try {
    const { data } = await axios.get(apiURL);
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getTask = async (id: string) => {
  try {
    const { data } = await axios.get(`${apiURL}/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const createTask = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  try {
    const { data } = await axios.post(apiURL, {
      title,
      description,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
