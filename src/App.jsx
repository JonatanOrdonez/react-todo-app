import React, { useContext, useEffect } from "react";
import useGetTasks from "./hooks/useGetTasks";
import AppContext from "./store/AppContext";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.scss";

const App = () => {
  const { tasks } = useGetTasks();
  const state = useContext(AppContext);

  useEffect(() => {
    state.setTasks(tasks);
  }, [tasks]);

  return (
    <div className="AppContainer">
      <SearchBar />
    </div>
  );
};

export default App;
