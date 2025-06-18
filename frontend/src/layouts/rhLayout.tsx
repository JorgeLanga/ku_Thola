// src/layouts/RHLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const RHLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
