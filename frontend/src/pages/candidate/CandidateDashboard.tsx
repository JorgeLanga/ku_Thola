import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StatusBadge } from "@/components/ui/StatusBadge";
import type { ApplicationProps } from "@/types/candidateProps";

export const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<ApplicationProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        // 🔁 Substituir pela sua API real
        const res = await fetch("/api/candidate/applications");
        if (!res.ok) throw new Error("Erro na API");
        const data: ApplicationProps[] = await res.json();
        setApplications(data);
      } catch (error) {
        console.error("Erro ao carregar candidaturas:", error);
        setApplications([]);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const countByStatus = (status: string) =>
    applications.filter((app) => app.status === status).length;

  const statusBadgeType = (status: string) => {
    switch (status) {
      case "received":
        return "pending";
      case "in_review":
        return "interview";
      case "result":
        return "approved";
      case "rejected":
        return "rejected";
      case "finalized":
        return "done";
      default:
        return "unknown";
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-primary-700">
        Painel do Candidato
      </h1>

      {/* Painel de Ações */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Candidaturas */}
        <CardAtalho
          title="Minhas Candidaturas"
          onClick={() => navigate("/candidato/minhas-candidaturas")}
          bg="bg-blue-600"
          hover="hover:bg-blue-700"
          content={
            <>
              <p>
                {applications.length} candidatura
                {applications.length !== 1 ? "s" : ""}
              </p>
              <p>{countByStatus("in_review")} em análise</p>
              <p>{countByStatus("received")} pendentes</p>
            </>
          }
        />

        {/* Entrevistas */}
        <CardAtalho
          title="Entrevistas Agendadas"
          onClick={() => navigate("/candidato/entrevistas")}
          bg="bg-green-600"
          hover="hover:bg-green-700"
          content={<p>Acompanhe seus agendamentos e prepare-se.</p>}
        />

        {/* Perfil */}
        <CardAtalho
          title="Editar Perfil"
          onClick={() => navigate("/candidato/perfil")}
          bg="bg-yellow-600"
          hover="hover:bg-yellow-700"
          content={<p>Atualize suas informações pessoais e currículo.</p>}
        />
      </div>

      {/* Candidaturas Recentes */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-primary-700">
          Candidaturas Recentes
        </h2>

        {loading ? (
          <p className="text-gray-600">Carregando candidaturas...</p>
        ) : applications.length === 0 ? (
          <p className="text-gray-500 italic">
            Você ainda não fez nenhuma candidatura.
          </p>
        ) : (
          <ul className="space-y-4">
            {applications.slice(0, 5).map((app) => (
              <li
                key={app.applicationId}
                className="border p-4 rounded shadow-sm hover:shadow-md transition cursor-pointer bg-white"
                onClick={() =>
                  navigate(`/candidato/minha-candidatura/${app.applicationId}`)
                }
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  navigate(`/candidato/minha-candidatura/${app.applicationId}`)
                }
                aria-label={`Ver detalhes da candidatura para ${app.jobTitle}`}
              >
                <h3 className="text-xl font-semibold text-primary-700">
                  {app.jobTitle}
                </h3>
                <p className="text-gray-700 text-sm">
                  Candidatado em:{" "}
                  {new Date(app.applicationDate).toLocaleDateString("pt-PT")}
                </p>

                <StatusBadge status={statusBadgeType(app.status)} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

// 🔧 Componente reutilizável para os atalhos (cartões)
interface CardProps {
  title: string;
  onClick: () => void;
  bg: string;
  hover: string;
  content: React.ReactNode;
}

const CardAtalho = ({ title, onClick, bg, hover, content }: CardProps) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    className={`cursor-pointer rounded-lg ${bg} ${hover} text-white p-6 shadow transition`}
    aria-label={title}
  >
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <div className="text-sm">{content}</div>
  </div>
);
