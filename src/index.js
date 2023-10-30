import { StrictMode } from "react"; // Import the StrictMode component from the React library
import { createRoot } from "react-dom/client"; // Import the createRoot function from React DOM

import App from "./App"; // Import the App component from the "App" file

const rootElement = document.getElementById("root"); // Get the HTML element with the id "root"
const root = createRoot(rootElement); // Create a root instance for rendering

root.render(
  // updates and creates VDOM
  <StrictMode>
    {" "}
    {/* Use StrictMode to highlight potential issues during development */}
    <App /> {/* Render the App component within StrictMode */}
  </StrictMode>
);
