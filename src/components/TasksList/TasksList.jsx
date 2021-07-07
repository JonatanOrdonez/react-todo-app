import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.scss";

const TasksList = () => {
  const state = useContext(AppContext);

  return (
    <div className="TasksList">
      {state.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TasksList;
