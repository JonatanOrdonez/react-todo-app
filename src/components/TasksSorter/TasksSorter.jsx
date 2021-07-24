import React, { useContext, useState } from "react";
import "./TasksSorter.scss";
import AppContext from "../../store/AppContext";
import { sortLabels } from "../../constants/sort";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const TasksSorter = () => {
  const state = useContext(AppContext);
  const [sortType, setSortType] = useState(sortLabels[0]);

  const handleSelect = (event) => {
    const itemSelected = event.target.value;
    setSortType(itemSelected);
    state.sortTasks(itemSelected);
  };

  return (
    <div className="tasksSorter">
      <Select value={sortType} onChange={handleSelect}>
        {sortLabels.map((sortLabel) => (
          <MenuItem key={sortLabel} value={sortLabel}>
            {sortLabel}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default TasksSorter;
