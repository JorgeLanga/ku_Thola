import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const SummaryCard = ({
  title,
  value,
  color = "text-blue-600",
}: {
  title: string;
  value: number | string;
  color?: string;
}) => (
  <div className="bg-white shadow rounded-lg p-4 sm:p-6">
    <h2 className={`text-lg sm:text-xl font-semibold ${color}`}>{title}</h2>
    <p className="mt-2 text-2xl sm:text-3xl font-bold">{value}</p>
  </div>
);

export const RecruiterDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Simulação de dados - pode vir da API ou context futuramente
  const totalJobs = 12;
  const totalCandidates = 48;
  const interviewsScheduled = 5;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-4 sm:p-8 w-full max-w-7xl mx-auto">
        <Button variant="outline" onClick={() => navigate("/")}>
          ← Voltar ao Home
        </Button>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6">Dashboard do Recrutador</h1>
        <p className="text-gray-600 mt-2">Gerencie suas vagas e acompanhe o progresso dos candidatos.</p>

        {/* Resumo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          <SummaryCard title="Total de Vagas" value={totalJobs} color="text-blue-600" />
          <SummaryCard title="Candidatos" value={totalCandidates} color="text-green-600" />
          <SummaryCard title="Entrevistas Agendadas" value={interviewsScheduled} color="text-yellow-600" />
        </div>

        {/* Ações rápidas */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Ações Rápidas</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Button onClick={() => navigate("/rh/vagas")}>Criar Nova Vaga</Button>
            <Button onClick={() => navigate("/rh/candidatos")}>Ver Candidatos</Button>
            <Button onClick={() => navigate("/rh/avaliacoes")}>Ver Avaliações</Button>
          </div>
        </div>
      </main>
    </div>
  );
};
