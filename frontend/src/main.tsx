import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes"; 
import { JobsProvider } from "./context/jobsContext"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobsProvider>
      <AppRoutes />
    </JobsProvider>
  </React.StrictMode>
);
