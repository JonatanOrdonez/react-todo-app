import React, { useState, createContext } from "react";

const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const state = { tasks, setTasks };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContext;
