import React, { useContext, useEffect } from "react";
import AppContext from "../store/AppContext";
import TasksList from "../components/TasksList/TasksList";
import "./TasksScreen.scss";
import TaskForm from "../components/TaskForm/TaskForm";
import getTasks from "../services/getTasks";
import TasksSorter from "../components/TasksSorter/TasksSorter";

const TasksScreen = () => {
  const state = useContext(AppContext);

  const loadTasks = async () => {
    const tasks = await getTasks();
    state.setTasks(tasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="tasksScreen">
      <TaskForm />
      <TasksSorter />
      <TasksList />
    </div>
  );
};

export default TasksScreen;
