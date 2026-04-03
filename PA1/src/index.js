import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering the app
import App from "./App"; // Import the main App component

// Create a root element for React to render into
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    {/* React.StrictMode helps detect potential problems in the app */}
    <App /> {/* Main application component */}
  </React.StrictMode>
);