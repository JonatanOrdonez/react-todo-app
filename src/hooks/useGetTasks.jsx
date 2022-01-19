import { useState, useEffect } from "react";
import axios from "axios";

const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);

  const requestTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const shortTasks = response.data.slice(0, 5);
      setTasks(shortTasks);
    } catch (error) {}
  };

  useEffect(() => {
    requestTasks();
  }, []);

  return {
    tasks,
  };
};

export default useGetTasks;
