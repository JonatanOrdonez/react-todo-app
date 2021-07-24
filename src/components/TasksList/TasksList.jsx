import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.scss";

const TasksList = () => {
  const state = useContext(AppContext);

  return (
    <div className="tasksList">
      {state.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          title={task.title}
        />
      ))}
    </div>
  );
};

export default TasksList;
