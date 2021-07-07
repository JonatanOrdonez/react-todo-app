import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import "./TaskForm.scss";
import AppContext from "../../store/AppContext";
import { v1 as uuidv1 } from "uuid";

const TaskForm = () => {
  const state = useContext(AppContext);
  const [text, setText] = useState("");

  const handleSave = (event) => {
    const id = uuidv1();
    event.preventDefault();
    const task = { id: id, title: text, selected: false, userId: id };
    state.saveTask(task);
    setText("");
  };

  return (
    <form className="taskForm" onSubmit={handleSave}>
      <TextField
        className="taskForm__input"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="taskForm__input"
        label="Agrega un titulo a la tarea"
      />
      <Button
        type="submit"
        color="primary"
        startIcon={<SaveIcon />}
        disabled={!text.length}
      >
        Guardar
      </Button>
    </form>
  );
};

export default TaskForm;
