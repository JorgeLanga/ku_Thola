// src/layouts/CandidateLayoutWithChildren.tsx
//import type { ReactNode } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { CandidateSidebar } from "./Sidebar";
import { CandidateBreadcrumb } from "./Breadcrumb";

const CandidateLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-100">
      <CandidateSidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4">
          <CandidateBreadcrumb path={location.pathname} />
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CandidateLayout;
