import React, { useContext, useEffect } from "react";
import useGetTasks from "./hooks/useGetTasks";
import AppContext from "./store/AppContext";
import TaskForm from "./components/TaskForm/TaskForm";
import TasksList from "./components/TasksList/TasksList";
import "./App.scss";
import SortItems from "./components/SortItems/SortItems";

const App = () => {
  const { tasks } = useGetTasks();
  const state = useContext(AppContext);

  useEffect(() => {
    state.setTasks(tasks);
    //eslint-disable-next-line
  }, [tasks]);

  return (
    <div className="AppContainer">
      <TaskForm />
      <SortItems />
      <TasksList />
    </div>
  );
};

export default App;
