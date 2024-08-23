import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <Paper elevation={2} sx={{ mb: 2 }}>
      <ListItem>
        <Checkbox
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon color="primary" />}
        />
        <ListItemText
          primary={task.text}
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "text.secondary" : "text.primary",
          }}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(task.id)}
            color="secondary"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}

export default TaskItem;
