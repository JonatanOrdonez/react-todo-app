import React from "react";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <TasksContainer />
    </AppContextWrapper>
  );
};

export default App;
