import axios from "axios";

const getTasks = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const tasks = response.data.slice(0, 5);
    return tasks;
  } catch (error) {
    return [];
  }
};

export default getTasks;
