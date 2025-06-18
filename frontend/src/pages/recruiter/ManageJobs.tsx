import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
// import { Sidebar } from '../../components/Sidebar';
import type { jobProps } from '@/types/recruiterProps';

export const ManageJobs = () => {
  const [jobs, setJobs] = useState<jobProps[]>([]);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDepartment, setJobDepartment] = useState('');
  const [jobDeadline, setJobDeadline] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      if (!response.ok) throw new Error('Erro ao buscar vagas');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCreateJob = async () => {
    if (!jobTitle || !jobDescription || !jobType || !jobDepartment || !jobDeadline) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    const newJob = {
      title: jobTitle,
      description: jobDescription,
      type: jobType,
      department: jobDepartment,
      deadline: jobDeadline,
    };

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJob),
      });
      if (!response.ok) throw new Error('Erro ao criar vaga');

      setJobTitle('');
      setJobDescription('');
      setJobType('');
      setJobDepartment('');
      setJobDeadline('');
      await fetchJobs();
    } catch (error) {
      console.error(error);
      alert('Erro ao criar vaga');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (jobId: string | number) => {
    if (!confirm('Tem certeza que deseja eliminar esta vaga?')) return;

    try {
      const response = await fetch(`/api/jobs/${jobId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Erro ao eliminar vaga');
      await fetchJobs();
    } catch (error) {
      console.error(error);
      alert('Erro ao eliminar vaga');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* <Sidebar /> */}
      <main className="flex-grow p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Gerir Vagas</h1>

        <section className="mb-10 sm:mb-12 bg-white p-4 sm:p-6 rounded shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Criar nova vaga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Título da Vaga"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Departamento"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={jobDepartment}
              onChange={(e) => setJobDepartment(e.target.value)}
            />
            <input
              type="text"
              placeholder="Tipo (presencial/virtual)"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
            <input
              type="date"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={jobDeadline}
              onChange={(e) => setJobDeadline(e.target.value)}
            />
            <textarea
              placeholder="Descrição da Vaga"
              className="border border-gray-300 rounded px-3 py-2 md:col-span-2 resize-y w-full"
              rows={4}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
          <div className="mt-4 sm:mt-6">
            <Button
              text={loading ? 'Criando...' : 'Criar Vaga'}
              onClick={handleCreateJob}
              disabled={loading}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Vagas Disponíveis</h2>
          {jobs.length === 0 ? (
            <p>Nenhuma vaga cadastrada.</p>
          ) : (
            <ul className="space-y-4 sm:space-y-6">
              {jobs.map((job) => (
                <li
                  key={job.id}
                  className="bg-white rounded shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="w-full">
                    <h3 className="text-base sm:text-lg font-semibold">{job.title}</h3>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <Button
                    text="Eliminar"
                    onClick={() => handleDeleteJob(job.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};
