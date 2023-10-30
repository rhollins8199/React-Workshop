import React from "react";
import "./styles.css";

// Task Functional Component
function Task({ task, deleteTask }) {
  const handleDelete = () => {
    // Call the deleteTask function with the task's ID
    deleteTask(task.id);
  };

  return (
    <li style={{ textDecoration: task.complete ? "line-through" : "none" }}>
      {task.task}
      {!task.complete && <button onClick={handleDelete}>Delete</button>}
    </li>
  );
}

export default Task; // Export the Task component for use in other parts of the application
