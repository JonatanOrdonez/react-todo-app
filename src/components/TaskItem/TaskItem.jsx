import React, { useContext } from "react";
import "./TaskItem.scss";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import AppContext from "../../store/AppContext";

const TaskItem = ({ id, completed, title }) => {
  const state = useContext(AppContext);

  const handleCheck = (event) => {
    const status = event.target.checked;
    state.setTaskStatus(id, status);
  };

  return (
    <Card className="taskItem">
      <div className="taskItem__checkbox">
        <Checkbox
          checked={completed}
          onChange={(event) => handleCheck(event)}
        />
      </div>
      <p>{title}</p>
    </Card>
  );
};

export default TaskItem;
