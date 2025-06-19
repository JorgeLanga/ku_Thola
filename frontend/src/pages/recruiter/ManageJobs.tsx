import React, { useState } from 'react';
import { useJobs } from '@/context/jobsContext'; 
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const ManageJobs = () => {
  const { jobs, addJob, deleteJob } = useJobs();
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');
  const [jobType, setJobType] = useState<'presencial' | 'virtual' | ''>('');
  const [jobDepartment, setJobDepartment] = useState('');
  const [jobDeadline, setJobDeadline] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateJob = () => {
    if (!jobTitle || !jobDescription || !jobType || !jobDepartment || !jobDeadline || !jobRequirements || !jobLocation) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    setLoading(true);
    addJob({
      title: jobTitle,
      description: jobDescription,
      requirements: jobRequirements.split(',').map(r => r.trim()),
      type: jobType,
      department: jobDepartment,
      expirationDate: jobDeadline,
      location: jobLocation,
      benefits: [],
    });
    // Reset campos
    setJobTitle('');
    setJobDescription('');
    setJobRequirements('');
    setJobType('');
    setJobDepartment('');
    setJobDeadline('');
    setJobLocation('');
    setLoading(false);
  };

  const handleDeleteJob = (id: string) => {
    if (window.confirm('Tem certeza que deseja eliminar esta vaga?')) {
      deleteJob(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Gerir Vagas</h1>
      <Button onClick={() => navigate('/rh/dashboard')}>← Voltar</Button>

      <section className="mt-6 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Criar nova vaga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Título da Vaga"
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Departamento"
            value={jobDepartment}
            onChange={e => setJobDepartment(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <select
            value={jobType}
            onChange={e => setJobType(e.target.value as 'presencial' | 'virtual' | '')}
            className="border px-3 py-2 rounded"
          >
            <option value="">Tipo</option>
            <option value="presencial">Presencial</option>
            <option value="virtual">Virtual</option>
          </select>
          <input
            type="date"
            value={jobDeadline}
            onChange={e => setJobDeadline(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Localização"
            value={jobLocation}
            onChange={e => setJobLocation(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Requisitos (separados por vírgula)"
            value={jobRequirements}
            onChange={e => setJobRequirements(e.target.value)}
            className="border px-3 py-2 rounded md:col-span-2"
          />
          <textarea
            placeholder="Descrição da Vaga"
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            className="border px-3 py-2 rounded md:col-span-2"
            rows={4}
          />
        </div>
        <div className="mt-4">
          <Button onClick={handleCreateJob} disabled={loading}>
            {loading ? 'Criando...' : 'Criar Vaga'}
          </Button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Vagas Disponíveis</h2>
        {jobs.length === 0 ? (
          <p>Nenhuma vaga cadastrada.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map(job => (
              <li
                key={job._id}
                className="bg-white rounded shadow p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.department} - {job.type}</p>
                </div>
                <Button onClick={() => handleDeleteJob(job._id)}>Eliminar</Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
