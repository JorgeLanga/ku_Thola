import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import type { ApplicationProps, CandidateProps } from '@/types/candidateProps';


export const CandidateProfile = () => {
  const { candidateId } = useParams<{ candidateId: string }>();
  const navigate = useNavigate();
  const [candidate, setCandidate] = React.useState<CandidateProps | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(`/api/candidates/${candidateId}`);
        if (!response.ok) throw new Error('Failed to fetch candidate');
        const data: CandidateProps = await response.json();
        setCandidate(data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
        setCandidate(null);
      } finally {
        setLoading(false);
      }
    };
    if (candidateId) fetchCandidate();
  }, [candidateId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-primary-600 font-medium">
        Carregando...
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        Candidato não encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-primary-700">{candidate.name}</h1>
      <div className="mb-6 space-y-1 text-gray-700">
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Telefone:</strong> {candidate.phone}</p>
        <p>
          <a
            href={candidate.cvUrl}
            download
            className="text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download do CV
          </a>
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Histórico de Candidaturas</h2>
        {candidate.applications.length === 0 ? (
          <p className="text-gray-500 italic">Nenhuma candidatura encontrada.</p>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {candidate.applications.map((application: ApplicationProps) => (
              <li key={application.jobId} className="text-gray-700">
                <span className="font-medium">{application.jobTitle}</span> — <span>{application.status}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-8">
        <Button
          text="Agendar Entrevista"
          onClick={() => {
            navigate(`/entrevistas/agendar/${candidateId}`);
          }}
        />
      </div>
    </div>
  );
};
