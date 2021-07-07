import React from "react";
import { AppContextWrapper } from "./store/AppContext";
import TasksScreen from "./screens/TasksScreen";

const App = () => {
  return (
    <AppContextWrapper>
      <TasksScreen />
    </AppContextWrapper>
  );
};

export default App;
