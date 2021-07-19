import React, { useState } from "react";
import { SORT_TYPE_ASC, SORT_TYPE_DESC } from "../constants/sort";

const AppContext = React.createContext();

export const AppContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const setTaskStatus = (id, status) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: status,
        };
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdated);
  };

  const updateTask = (id, title) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title,
        };
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  const saveTask = (task) => {
    const tasksUpdated = [...tasks, task];
    setTasks(tasksUpdated);
  };

  const sortTasks = (sortType) => {
    const tasksCopy = tasks.map((task) => task);
    if (sortType === SORT_TYPE_ASC) {
      tasksCopy.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortType === SORT_TYPE_DESC) {
      tasksCopy.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
    setTasks(tasksCopy);
  };

  const state = {
    tasks,
    setTasks,
    setTaskStatus,
    deleteTask,
    saveTask,
    updateTask,
    sortTasks,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
