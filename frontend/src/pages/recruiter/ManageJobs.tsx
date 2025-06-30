import React, { useState } from 'react';
import { useJobs } from '@/context/jobsContext';
import { Button } from '@/components/ui/Button';
import { InputGroup } from '@/components/ui/InputGroup';
import { useNavigate } from 'react-router-dom';

export const ManageJobs = () => {
  const { jobs, addJob, deleteJob } = useJobs();
  const [form, setForm] = useState({
    title: '',
    department: '',
    type: '' as 'presencial'|'virtual'|'',
    expirationDate: '',
    location: '',
    requirements: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleCreate = () => {
    const { title, department, type, expirationDate, location, requirements, description } = form;
    if (!title||!department||!type||!expirationDate||!location||!requirements||!description) {
      alert('Preencha todos os campos.');
      return;
    }
    setLoading(true);
    addJob({
      title,
      department,
      type,
      expirationDate,
      location,
      requirements: requirements.split(',').map(r => r.trim()),
      description,
      benefits: [],
      candidateCount: 0
    });
    setForm({ title:'', department:'', type:'', expirationDate:'', location:'', requirements:'', description:'' });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Gerir Vagas</h1>
      <Button variant="outline" onClick={()=>navigate('/rh/dashboard')}>← Voltar</Button>

      <section className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Criar nova vaga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup label="Título da vaga" id="title" value={form.title} onChange={handleChange('title')} required />
          <InputGroup label="Departamento" id="department" value={form.department} onChange={handleChange('department')} required />
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-800 mb-1">Tipo</label>
            <select id="type" value={form.type} onChange={handleChange('type')} className="mt-1 w-full border px-3 py-2 rounded-md">
              <option value="">Selecione</option>
              <option value="presencial">Presencial</option>
              <option value="virtual">Virtual</option>
            </select>
          </div>
          <InputGroup label="Data de expiração" id="expirationDate" type="date" value={form.expirationDate} onChange={handleChange('expirationDate')} required />
          <InputGroup label="Localização" id="location" value={form.location} onChange={handleChange('location')} required />
          <InputGroup label="Requisitos (vírgula-separados)" id="requirements" value={form.requirements} onChange={handleChange('requirements')} required textarea rows={2} />
          <InputGroup label="Descrição da vaga" id="description" value={form.description} onChange={handleChange('description')} required textarea rows={4} />
        </div>
        <div className="mt-4">
          <Button onClick={handleCreate} disabled={loading}>{loading?'Criando...':'Criar Vaga'}</Button>
        </div>
      </section>

      <section className="mt-10 flex-1">
        <h2 className="text-2xl font-semibold mb-4">Vagas Disponíveis</h2>
        {jobs.length===0?(
          <p className="text-gray-600">Nenhuma vaga cadastrada.</p>
        ):(
          <ul className="space-y-4">
            {jobs.map(job=>(
              <li key={job._id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.department} - {job.type}</p>
                </div>
                <Button variant="destructive" onClick={()=>deleteJob(job._id)}>Eliminar</Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
