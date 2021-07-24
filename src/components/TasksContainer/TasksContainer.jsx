import React, { useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../../store/AppContext";

const TasksContainer = () => {
  const state = useContext(AppContext);

  const loadTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const tasks = response.data.slice(0, 5);
      console.log(tasks);
      state.setTasks(tasks);
    } catch (error) {}
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return <p>Taskscontainer</p>;
};

export default TasksContainer;
