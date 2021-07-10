import React, { useState, useEffect, useContext } from "react";
import Select from "@material-ui/core/Select";
import "./TasksSorter.scss";
import AppContext from "../../store/AppContext";
import { sortLabels } from "../../constants/sort";

const TasksSorter = () => {
  const state = useContext(AppContext);

  const [sortType, setSortType] = useState(sortLabels[0]);

  useEffect(() => {
    state.sortTasks(sortType);
  }, [sortType]);

  return (
    <div className="tasksSorter">
      <Select
        native
        value={sortType}
        onChange={(event) => setSortType(event.target.value)}
      >
        {sortLabels.map((sortLabel) => (
          <option key={sortLabel} value={sortLabel}>
            {sortLabel}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default TasksSorter;
