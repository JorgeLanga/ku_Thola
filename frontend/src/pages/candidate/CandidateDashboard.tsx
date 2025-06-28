import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge'; // supondo que tenha um componente assim
import type { ApplicationProps } from '@/types/candidateProps';

export const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<ApplicationProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: substituir pela chamada real ao backend/API
    const fetchApplications = async () => {
      setLoading(true);
      try {
        // Exemplo de fetch
        const res = await fetch('/api/candidate/applications');
        const data: ApplicationProps[] = await res.json();
        setApplications(data);
      } catch (error) {
        console.error('Erro ao carregar candidaturas:', error);
        setApplications([]);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
  

      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-primary-700">Painel do Candidato</h1>

        <div className="mb-6 flex flex-wrap gap-4">
          <Button onClick={() => navigate('/candidato/perfil-candidato')}>Editar Perfil</Button>
          <Button onClick={() => navigate('/candidato/')}>Notificações</Button>
          <Button onClick={() => navigate('/candidato/agendamento-entrevista')}>Agendar Entrevista</Button>
        </div>

        {loading ? (
          <p className="text-gray-600">Carregando candidaturas...</p>
        ) : applications.length === 0 ? (
          <p className="text-gray-600 italic">Você ainda não fez nenhuma candidatura.</p>
        ) : (
          <ul className="space-y-4">
            {applications.map((app) => (
              <li
                key={app.applicationId}
                className="border p-4 rounded shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/candidato/candidatura/${app.applicationId}`)}
                aria-label={`Ver detalhes da candidatura para a vaga ${app.jobTitle}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/candidato/candidatura/${app.applicationId}`)}
              >
                <h2 className="text-xl font-semibold text-primary-700">{app.jobTitle}</h2>
                <p className="text-gray-700">Data da candidatura: {new Date(app.applicationDate).toLocaleDateString('pt-PT')}</p>
                <StatusBadge status={
                  app.status === "received"
                    ? "pending"
                    : app.status === "in_review"
                    ? "interview"
                    : app.status === "result"
                    ? "approved" // or "rejected", depending on your logic
                    : app.status
                } />
              </li>
            ))}
          </ul>
        )}
      </main>
     
    </div>
  );
};
