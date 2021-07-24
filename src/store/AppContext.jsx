import React, { useState } from "react";
import * as uuid from "uuid";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
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

  const saveTask = (title) => {
    const newTask = {
      id: uuid.v1(),
      completed: false,
      userId: uuid.v1(),
      title,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const state = { tasks, setTasks, setTaskStatus, saveTask };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
