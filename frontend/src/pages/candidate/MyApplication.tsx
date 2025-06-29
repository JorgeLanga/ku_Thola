import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface StageStatus {
  stage: string;
  completed: boolean;
}

export const MyApplication = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const justSubmitted = queryParams.get("submitted") === "true";

  const [showSuccessBanner, setShowSuccessBanner] = useState(justSubmitted);
  const [applicationStatus, setApplicationStatus] = useState<StageStatus[]>([]);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [submissionDate, setSubmissionDate] = useState<string>("");

  useEffect(() => {
    // Simula um fetch à API para buscar dados da candidatura específica
    const fetchApplication = async () => {
      try {
        // Substitua pela chamada real da API: `/api/candidaturas/${id}`
        const response = await fetch(`/api/candidaturas/${id}`);
        const data = await response.json();

        setApplicationStatus(data.statusTimeline); // Ex: [{ stage: 'Recebido', completed: true }, ...]
        setJobTitle(data.jobTitle);
        setSubmissionDate(data.submissionDate);
      } catch (error) {
        console.error("Erro ao buscar candidatura:", error);
        // fallback para estado inicial
        setApplicationStatus([
          { stage: "Recebido", completed: true },
          { stage: "Em Avaliação", completed: false },
          { stage: "Entrevista", completed: false },
          { stage: "Resultado", completed: false },
        ]);
        setJobTitle("Cargo desconhecido");
        setSubmissionDate(new Date().toISOString());
      }
    };

    fetchApplication();

    if (justSubmitted) {
      const timer = setTimeout(() => setShowSuccessBanner(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [id, justSubmitted]);

  const currentStatus =
    applicationStatus.find((s) => !s.completed) ||
    applicationStatus[applicationStatus.length - 1];

  const progressPercent =
    (applicationStatus.filter((s) => s.completed).length /
      applicationStatus.length) *
    100;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black bg-cover bg-center bg-[url('/img/fundo-2.jpg')] p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-700">Minha Candidatura</h1>

        {showSuccessBanner && (
          <div className="mb-6 p-4 bg-green-100 text-green-900 rounded border border-green-300" role="alert">
            <p className="font-semibold mb-1">✅ Sua candidatura foi enviada com sucesso!</p>
            <p>Você se candidatou para o cargo de <strong>{jobTitle}</strong> em {new Date(submissionDate).toLocaleString("pt-PT")}</p>
            <p className="mt-2">Nossa equipe vai analisar seu perfil e entraremos em contato em até 10 dias úteis.</p>
            <p className="mt-2">Enquanto isso, você pode acompanhar o status abaixo ou voltar ao seu painel.</p>
          </div>
        )}

        <ProgressBar progress={progressPercent} />

        <section className="mt-8 space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold text-gray-900">
            Status atual: <span className="text-primary-600">{currentStatus.stage}</span>
          </h2>

          <p>
            {currentStatus.completed
              ? "Obrigado por sua candidatura!"
              : "Estamos avaliando sua candidatura."}
          </p>

          {currentStatus.stage === "Entrevista" && currentStatus.completed && (
            <p className="font-medium text-gray-900">
              Data da entrevista: <time dateTime="2025-10-15T10:00:00">15 de Outubro, 10:00 AM</time>
            </p>
          )}

          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={() => navigate("/candidato/dashboard")}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Voltar ao Dashboard
            </button>

            <button
              type="button"
              onClick={() => navigate("/candidato/minhas-candidaturas")}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg"
            >
              Ver Todas Candidaturas
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
