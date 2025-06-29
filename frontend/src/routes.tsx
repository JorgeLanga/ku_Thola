import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { RHLayout } from "./layouts/rhLayout";
import { ErrorPage } from "./pages/error-page";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import HelpFAQ from "./pages/candidate/Help.tsx";
import { About } from "./pages/About.tsx"; 

import { JobsList } from "./pages/candidate/JobsList";
import { JobDetails } from "./pages/candidate/JobDetails";
import { ApplicationForm } from "./pages/candidate/ApplicationForm";
import { MyApplication } from "./pages/candidate/MyApplication";
import { CandidateProfile } from "./pages/candidate/CandidateProfile";
import { FinalFeedback } from "./pages/candidate/FinalFeedback";
import { CandidateDashboard } from "./pages/candidate/CandidateDashboard";
import { LoginCandidate } from "./pages/candidate/LoginCandidate";
import { RegisterCandidate } from "./pages/candidate/RegisterCandidate";
import { CandidateNotifications } from "./pages/candidate/candidateNotification";
import { InterviewFeedback } from "./pages/candidate/InterviewFeedback";

import { RecruiterLogin } from "./pages/recruiter/RecruiterLogin";
import { RecruiterDashboard } from "./pages/recruiter/RecruiterDashboard";
import { ManageJobs } from "./pages/recruiter/ManageJobs";
import { CandidateEvaluation } from "./pages/recruiter/CandidateEvaluation";
import { CandidatesList } from "./pages/recruiter/candidatesList";
import { EvaluationsList } from "./pages/recruiter/EvaluactionsList";
import  CandidateLayout  from "./layouts/candidate/CandidateLayout";
//import { CandidateLayoutIfAuthenticated } from "./layouts/CandidateLayoutIfAuthenticated.tsx";
import { DashboardCandidaturas } from "./pages/candidate/DashboardCandidaturas.tsx";
import { DashboardEntrevistas } from "./pages/candidate/DashboardEntrevistas.tsx";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas (Sem layout) */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ajuda" element={<HelpFAQ/>} />
        <Route path="/login" element={<LoginCandidate />} />
        <Route path="/registro" element={<RegisterCandidate />} />

       {/* Rotas protegidas do candidato (com layout completo) */}
      
        <Route path="/candidato" element={<CandidateLayout />}>
          <Route path="vagas"element={ <JobsList />}/>
          <Route path="vagas/:id" element={<JobDetails />} />

          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="minhas-candidaturas" element={<DashboardCandidaturas />} />
          <Route path="entrevistas" element={<DashboardEntrevistas />} />
          <Route path="perfil" element={<CandidateProfile />} />
          <Route path="candidatar/:id" element={<ApplicationForm />} />
          <Route path="minha-candidatura" element={<MyApplication />} />
          <Route path="notificacoes" element={<CandidateNotifications />} />
          <Route path="feedback/:id" element={<InterviewFeedback />} />
        </Route>

        {/* Recrutador - públicas por agora */}
        <Route path="/rh/login" element={<RecruiterLogin />} />
        <Route path="/rh" element={<RHLayout />}>
          <Route path="dashboard" element={<RecruiterDashboard />} />
          <Route path="vagas" element={<ManageJobs />} />
          <Route path="candidatos" element={<CandidatesList />} />
          <Route path="avaliacoes" element={<EvaluationsList />} />
          <Route path="candidato/:id" element={<CandidateProfile />} />
          <Route path="candidato/:id/avaliacao" element={<CandidateEvaluation />} />
          <Route path="candidato/:id/feedback" element={<FinalFeedback />} />
        </Route>

        {/* Páginas institucionais */}
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />

        {/* Página de erro */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
