import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { toast } from 'react-toastify'; // Certifique-se de ter instalado react-toastify
import type { jobProps } from '@/types/recruiterProps'; 

export const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = React.useState<jobProps | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) throw new Error('Erro ao carregar a vaga');
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Erro ao buscar vaga:', error);
        toast.error('Erro ao carregar os detalhes da vaga. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <div className="text-center text-gray-600 mt-8">Carregando vaga...</div>;
  }

  if (!job) {
    return <div className="text-center text-red-600 mt-8">Vaga não encontrada.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-6">{job.description}</p>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Requisitos</h3>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Local</h3>
        <p className="text-gray-700 mt-1">{job.location}</p>
      </div>

      {job.benefits && job.benefits.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Benefícios</h3>
          <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      <Button
        text="Candidatar-se"
        type="button"
        onClick={() => navigate(`/candidatar/${job.id}`)}
      />
    </div>
  );
};
