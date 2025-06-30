// pages/recruiter/JobMatching.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "@/context/jobsContext";
import { Header } from "@/components/layout/headers";
import { Footer } from "@/components/layout/footer";
import { CandidateScoreCard } from "@/components/cards/CandidateScoreCard";

// Mock de candidatos com pontuação simulada para ranking
const mockRankedCandidates = [
  { name: "Albertina Dlambe", score: 9, notes: "Excelentes habilidades em React e comunicação." },
  { name: "Graça Boaventura Bila", score: 8.5, notes: "Boa experiência em frontend e cultura de equipe." },
  { name: "Domingos A. Timane Jr", score: 8, notes: "Boa aptidão técnica e participação ativa." },
];

export const JobMatching = () => {
  const { id } = useParams<{ id: string }>();
  const { jobs } = useJobs();
  const navigate = useNavigate();

  const job = jobs.find((j) => j._id === id);

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <button onClick={() => navigate("/rh/vagas")} className="text-blue-600 mb-4 hover:underline">
          ← Voltar para vagas
        </button>

        <h1 className="text-2xl font-semibold mb-2">Matching Automático</h1>
        <p className="text-gray-700 mb-6">
          Ranking de candidatos com melhor adequação para a vaga:
          <strong className="ml-1">{job?.title ?? "Vaga desconhecida"}</strong>
        </p>

        <div className="space-y-4">
          {mockRankedCandidates.map((c, index) => (
            <CandidateScoreCard key={index} name={c.name} score={c.score} notes={c.notes} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobMatching;
