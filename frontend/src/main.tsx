import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes"; // Supondo que você moveu as rotas para AppRoutes.tsx
import "./index.css"; // Importe seus estilos globais aqui

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
