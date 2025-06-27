import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobs } from '@/context/jobsContext';
import { Button } from '@/components/ui/Button'; // botão custom

export const JobsList = () => {
  const navigate = useNavigate();
  const { jobs } = useJobs();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
     
      <main role="main" className="flex-grow max-w-4xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Vagas Disponíveis</h1>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-600">Nenhuma vaga disponível no momento.</p>
        ) : (
          <ul className="space-y-8" aria-label="Lista de vagas disponíveis">
            {jobs.map(job => (
              <li
                key={job._id}
                className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-primary">{job.title}</h2>
                <p className="text-gray-700 mt-1">
                  <strong>Departamento:</strong> {job.department}
                </p>
                <p className="text-gray-700">
                  <strong>Tipo:</strong> {job.type}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Data de Término:</strong>{' '}
                  {new Date(job.expirationDate).toLocaleDateString('pt-PT')}
                </p>
                <Button
                  onClick={() => navigate(`/vagas/${job._id}`)}
                  aria-label={`Ver detalhes da vaga: ${job.title}`}
                >
                  Ver Detalhes &rarr;
                </Button>
              </li>
            ))}
          </ul>
        )}
      </main>
      
    </div>
  );
};
