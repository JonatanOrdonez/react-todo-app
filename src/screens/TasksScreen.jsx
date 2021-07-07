import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../store/AppContext";
import TasksList from "../components/TasksList/TasksList";
import "./TasksScreen.scss";
import TaskForm from "../components/TaskForm/TaskForm";

const TasksScreen = () => {
  const state = useContext(AppContext);

  const loadTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const tasks = response.data.slice(0, 5);
      console.log(tasks);
      state.setTasks(tasks);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="tasksScreen">
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TasksScreen;
