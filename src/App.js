import React, { useState } from "react";
import "./styles.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";
import data from "./data"; // Import the data from data.js

// App Component (main)
function App() {
  const [tasks, setTasks] = useState(data); // Initialize state with the data

  // Function to add a new task to the tasks state
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      task: taskText,
      complete: false
    };
    setTasks([...tasks, newTask]);
  };

  // Function to mark a task as complete
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, complete: true };
        }
        return task;
      });
    });
  };

  // Function to clear the list
  const clearList = () => {
    setTasks([]); // Set tasks to an empty array to clear the list
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <button onClick={clearList}>Clear</button>
      <Footer />
    </div>
  );
}

export default App; // Export the App component
