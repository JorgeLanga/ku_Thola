import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home"; 
import { JobsList } from "./pages/candidate/JobsList";
import { JobDetails } from "./pages/candidate/JobDetails";
import { ApplicationForm } from "./pages/candidate/ApplicationForm";
import { MyApplication } from "./pages/candidate/MyApplication";
import { RecruiterLogin } from "./pages/recruiter/RecruiterLogin";
import { RecruiterDashboard } from "./pages/recruiter/RecruiterDashboard";
import { ManageJobs } from "./pages/recruiter/ManageJobs";
import { CandidateProfile } from "./pages/candidate/CandidateProfile"; 
import { CandidateEvaluation } from "./pages/recruiter/CandidateEvaluation";
import { FinalFeedback } from "./pages/candidate/FinalFeedback";
import { RHLayout } from "./layouts/rhLayout";
import type { ReactNode } from "react";

function PrivateRoute({ children }: { children: ReactNode }) {
  const isAuth = !!localStorage.getItem("rh_token");
  return isAuth ? children : <Navigate to="/rh/login" replace />;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vagas" element={<JobsList />} />
        <Route path="/vagas/:id" element={<JobDetails />} />
        <Route path="/candidatar/:id" element={<ApplicationForm />} />
        <Route path="/minha-candidatura" element={<MyApplication />} />

        {/* Login do RH */}
        <Route path="/rh/login" element={<RecruiterLogin />} />

        {/* Rotas do Recrutador/RH (privadas) */}
        <Route
          path="/rh"
          element={
            <PrivateRoute>
              <RHLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<RecruiterDashboard />} />
          <Route path="vagas" element={<ManageJobs />} />
          <Route path="candidato/:id" element={<CandidateProfile />} />
          <Route
            path="candidato/:id/avaliacao"
            element={<CandidateEvaluation />}
          />
          <Route path="candidato/:id/feedback" element={<FinalFeedback />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
