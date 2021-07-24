import React, { useContext, useState } from "react";
import "./TaskForm.scss";
import AppContext from "../../store/AppContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const TaskForm = () => {
  const state = useContext(AppContext);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    state.saveTask(text);
    setText("");
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <TextField
        className="taskForm__input"
        required={true}
        value={text}
        onChange={(event) => setText(event.target.value)}
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
