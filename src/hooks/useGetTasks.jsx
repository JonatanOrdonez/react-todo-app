import { useState, useEffect } from "react";
import axios from "axios";
import { getTasks, updateTasks } from "../utils/storage";

const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);

  const requestTasks = async () => {
    try {
      const storageTasks = getTasks();
      if (storageTasks) {
        console.log("Si existen tareas en el storage");
        setTasks(storageTasks);
      } else {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );

        console.log("No existen tareas en el storage");
        const shortTasks = response.data.slice(0, 5);
        updateTasks(shortTasks);
        setTasks(shortTasks);
      }
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
