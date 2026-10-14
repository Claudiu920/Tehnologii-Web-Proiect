import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // Am inlocuit index.css cu App.css

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);