import React, { useState } from "react";

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

  const saveTask = (task) => {
    const tasksUpdated = [...tasks, task];
    setTasks(tasksUpdated);
  };

  const state = { tasks, setTasks, setTaskStatus, deleteTask, saveTask };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
