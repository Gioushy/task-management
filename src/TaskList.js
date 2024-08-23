import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </List>
  );
}

export default TaskList;
