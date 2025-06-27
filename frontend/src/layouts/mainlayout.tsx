// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/headers"; 
import { Footer } from "@/components/layout/footer";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-6 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
