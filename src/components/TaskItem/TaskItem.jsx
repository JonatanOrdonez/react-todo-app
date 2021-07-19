import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import "./TaskItem.scss";
import AppContext from "../../store/AppContext";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

const TaskItem = ({ id, title, completed }) => {
  const state = useContext(AppContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [text, setText] = useState(title);

  const handleCheck = (event) => {
    state.setTaskStatus(id, event.target.checked);
  };

  const handleDelete = () => {
    state.deleteTask(id);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpdate = () => {
    setIsUpdating(false);
    state.updateTask(id, text);
  };

  const handleKeyDown = (event) => {
    if (String(event.key).toLowerCase() === "enter" && text.length) {
      handleUpdate();
    }
  };

  const handleDoubleClick = () => {
    setIsUpdating(true);
  };

  return (
    <Card className="taskItem" onDoubleClick={handleDoubleClick}>
      <div className="taskItem__checkbox">
        <Checkbox checked={completed} onChange={handleCheck} />
      </div>
      <div className="taskItem__title">
        {isUpdating ? (
          <TextField
            className="taskItem__input"
            label="Tarea..."
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
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
            <UpdateIcon />
          </IconButton>
        )}

        <IconButton color="secondary" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default TaskItem;
