import React, { useState } from "react";
import "./styles.css";

// TaskForm Component
function TaskForm({ addTask }) {
  const [userInput, setUserInput] = useState(""); // State to manage the input field

  const handleAddTask = (e) => {
    e.preventDefault(); // Need this or the page will refresh each time

    // Check if the input is not empty
    if (userInput.trim() !== "") {
      addTask(userInput); // Call the addTask function from the parent component
      setUserInput(""); // Clear the input field
    }
  };

  return (
    <form className="TaskForm">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add</button>
    </form>
  );
}

export default TaskForm; // Export the TaskForm component for use in other parts of the application
