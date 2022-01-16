import React from "react";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <p>todo-app</p>
    </AppContextWrapper>
  );
};

export default App;
