import React from "react";
import "./styles.css";

// Footer Component
function Footer() {
  return (
    <footer className="Footer">
      Copyright &copy; {new Date().getFullYear()} ReAnn Hollins
    </footer>
  );
}
export default Footer; // Export the Footer component for use in other parts of the application
