import React, { useContext, useState } from "react";
import AppContext from "../../store/AppContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "./TasksList.scss";

const TaskItem = ({ title, deleteTask, saveTaskTitle }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [itemTitle, setItemTitle] = useState(title);

  return (
    <Box
      mb="1%"
      p="2%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ border: 1, borderColor: "grey.400" }}
    >
      {!isEditable && (
        <Typography className="TaskItem__title" noWrap>
          {title}
        </Typography>
      )}
      {isEditable && (
        <TextField
          className="TaskItem__title"
          variant="standard"
          value={itemTitle}
          onChange={(e) => setItemTitle(e.target.value)}
        />
      )}
      {!isEditable && (
        <IconButton
          className="TaskItem__edit"
          color="primary"
          onClick={() => setIsEditable(true)}
        >
          <EditIcon />
        </IconButton>
      )}
      {isEditable && (
        <IconButton
          className="TaskItem__save"
          color="primary"
          onClick={() => {
            setIsEditable(false);
            saveTaskTitle(itemTitle);
          }}
          disabled={!itemTitle.length}
        >
          <SaveIcon />
        </IconButton>
      )}
      <IconButton
        className="TaskItem__delete"
        color="error"
        onClick={deleteTask}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

const TasksList = () => {
  const state = useContext(AppContext);
  return (
    <Box mb="2%" px="1%" className="TasksListContainer">
      {state.tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          deleteTask={() => state.deleteTask(task.id)}
          saveTaskTitle={(itemTitle) => state.editTaskTitle(task.id, itemTitle)}
        />
      ))}
    </Box>
  );
};

export default TasksList;
