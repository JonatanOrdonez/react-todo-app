const TASKS_KEY = "tasks";

export const getTasks = () => {
  const rawTasks = localStorage.getItem(TASKS_KEY);
  if (rawTasks && rawTasks !== "") {
    return JSON.parse(rawTasks);
  }

  return null;
};

export const updateTasks = (tasks) => {
  const rawTasks = JSON.stringify(tasks);
  localStorage.setItem(TASKS_KEY, rawTasks);
};
