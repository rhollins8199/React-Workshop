import React from "react";
import "./styles.css";
import Task from "./Task"; // Import the Task component

// TaskList Component
function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        // For each task, create a Task component
        <Task
          key={task.id} // A unique identifier for each Task component
          task={task} // Pass the task data as a prop to the Task component
          deleteTask={deleteTask} // Pass the deleteTask function as a prop for handling task deletion
        />
      ))}
    </ul>
  );
}

export default TaskList; // Export the TaskList component for use in other parts of the application
