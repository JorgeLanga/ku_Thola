import React from "react";
import { useJobs } from "@/context/jobsContext";

interface Evaluation {
  candidateName: string;
  email: string;
  jobId: string;
  status: string;
  technical: string;
  behavioral: string;
}

const mockEvaluations: Evaluation[] = [
  {
    candidateName: "Albertina Dlambe",
    email: "dlambealbertina@gmail.com",
    jobId: "1", // Desenvolvedor Frontend
    status: "Aprovado",
    technical: "Bom domínio de React e lógica de UI.",
    behavioral: "Comunicativa e proativa.",
  },
  {
    candidateName: "Almório Adolfo Chaguala",
    email: "almorioadolfo01@gmail.com",
    jobId: "2", // Analista de Marketing
    status: "Não selecionado",
    technical: "Conhecimentos razoáveis em SEO, mas fraco em Google Ads.",
    behavioral: "Boa postura, mas tímido nas respostas.",
  },
  {
    candidateName: "Graça Boaventura Bila",
    email: "gracabilla002@gmail.com",
    jobId: "1",
    status: "Aprovado",
    technical: "Experiência sólida em frontend.",
    behavioral: "Ótimo trabalho em equipe.",
  },
];

export const EvaluationsList = () => {
  const { jobs } = useJobs();

  const getJobTitle = (jobId: string) => {
    const job = jobs.find((j) => j._id === jobId);
    return job ? job.title : "Vaga desconhecida";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Avaliações</h1>
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Candidato</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Vaga</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Técnica</th>
              <th className="px-4 py-2">Comportamental</th>
            </tr>
          </thead>
          <tbody>
            {mockEvaluations.map((evalItem, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{evalItem.candidateName}</td>
                <td className="px-4 py-2 text-blue-600 underline">{evalItem.email}</td>
                <td className="px-4 py-2">{getJobTitle(evalItem.jobId)}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    evalItem.status === "Aprovado" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {evalItem.status}
                </td>
                <td className="px-4 py-2 text-sm">{evalItem.technical}</td>
                <td className="px-4 py-2 text-sm">{evalItem.behavioral}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
