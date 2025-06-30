// src/pages/Recruiter/CandidateProfile.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/headers";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/Button";

// Simulação temporária (substituir depois com fetch ou contexto)
const mockCandidates = [
  {
    id: "1",
    name: "Albertina Dlambe",
    email: "dlambealbertina@gmail.com",
    phone: "871522004 / 850221504",
    jobTitle: "Desenvolvedor Frontend",
    resumeLink: "https://example.com/cv-albertina.pdf",
    notes: "Candidata com boa comunicação e portfólio completo."
  },
  // ... outros candidatos
];

export const CandidateProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const candidate = mockCandidates.find((c) => c.id === id);

  if (!candidate) {
    return <div className="p-6 text-red-600">Candidato não encontrado.</div>;
  }

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-8">
        <Button onClick={() => navigate(-1)}>← Voltar</Button>

        <h1 className="text-2xl font-bold mt-4">Perfil do Candidato</h1>

        <div className="mt-6 space-y-4 text-gray-800">
          <p><strong>Nome:</strong> {candidate.name}</p>
          <p><strong>Email:</strong> <a href={`mailto:${candidate.email}`} className="text-blue-600 underline">{candidate.email}</a></p>
          <p><strong>Telefone:</strong> {candidate.phone}</p>
          <p><strong>Vaga Pretendida:</strong> {candidate.jobTitle}</p>
          <p><strong>Currículo:</strong> <a href={candidate.resumeLink} target="_blank" className="text-blue-600 underline">Ver Currículo</a></p>
          <p><strong>Notas:</strong> {candidate.notes}</p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
  <Button onClick={() => navigate(`/rh/candidato/${id}/avaliacao`)}>
    Avaliação Técnica
  </Button>
  <Button onClick={() => navigate(`/rh/candidato/${id}/entrevista`)}>
    Agendar Entrevista
  </Button>
  <Button onClick={() => navigate(`/rh/candidato/${id}/comunicacao`)}>
    Comunicação
  </Button>
  <Button onClick={() => navigate(`/rh/candidato/${id}/notificacoes`)}>
    Notificações
  </Button>
  <Button onClick={() => navigate(`/rh/candidato/${id}/feedback`)}>
    Feedback Final
  </Button>
</div>

      </main>
      <Footer />
    </div>
  );
};
