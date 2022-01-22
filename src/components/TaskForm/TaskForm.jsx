import React, { useContext, useState } from "react";
import "./TaskForm.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppContext from "../../store/AppContext";

const TaskForm = () => {
  const [text, setText] = useState("");
  const state = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    state.addTask(text);
    setText("");
  };

  return (
    <form className="TaskFormContainer" onSubmit={handleClick}>
      <TextField
        className="TaskFormContainer__input"
        label="Nombre de la tarea"
        variant="outlined"
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="TaskFormContainer__button"
        variant="outlined"
        disabled={!text.length}
        onClick={handleClick}
      >
        Crear
      </Button>
    </form>
  );
};

export default TaskForm;
