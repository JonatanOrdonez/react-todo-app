import React, { useState } from "react";

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

  const state = { tasks, setTasks, setTaskStatus };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
