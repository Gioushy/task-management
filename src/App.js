import React, { useState } from "react";
import { Container, Typography, CssBaseline, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      color: "#3f51b5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
        },
      },
    },
  },
});

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Task Manager
          </Typography>
          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onToggleComplete={toggleComplete}
          />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
