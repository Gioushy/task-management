import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        fullWidth
        size="large"
      >
        Add Task
      </Button>
    </Box>
  );
}

export default TaskForm;
