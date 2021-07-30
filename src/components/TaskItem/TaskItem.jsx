import React, { useContext, useState } from "react";
import "./TaskItem.scss";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import AppContext from "../../store/AppContext";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";

const TaskItem = ({ id, completed, title }) => {
  const state = useContext(AppContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [text, setText] = useState(title);

  const handleCheck = (event) => {
    const status = event.target.checked;
    state.setTaskStatus(id, status);
  };

  const handleUpdate = () => {
    setIsUpdating(false);
    state.setTaskTitle(id, text);
  };

  return (
    <Card className="taskItem">
      <div className="taskItem__checkbox">
        <Checkbox
          checked={completed}
          onChange={(event) => handleCheck(event)}
        />
      </div>
      <div className="taskItem__title">
        {isUpdating ? (
          <TextField
            className="taskItem__input"
            label="Tarea..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="taskItem__buttons">
        {isUpdating ? (
          <IconButton
            color="primary"
            onClick={handleUpdate}
            disabled={!text.length}
          >
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton color="primary" onClick={() => setIsUpdating(true)}>
            <CreateIcon />
          </IconButton>
        )}

        <IconButton color="secondary" onClick={() => state.deleteTask(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default TaskItem;
