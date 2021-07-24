import React, { useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../../store/AppContext";
import TasksList from "../TasksList/TasksList";
import "./TasksContainer.scss";

const TasksContainer = () => {
  const state = useContext(AppContext);

  const loadTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const tasks = response.data.slice(0, 5);
      state.setTasks(tasks);
    } catch (error) {}
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="tasksContainer">
      <TasksList />
    </div>
  );
};

export default TasksContainer;
