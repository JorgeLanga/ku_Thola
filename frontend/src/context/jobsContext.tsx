import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { jobProps } from '@/types/recruiterProps';

interface JobsContextType {
  jobs: jobProps[];
  addJob: (job: Omit<jobProps, '_id'>) => void;
  deleteJob: (id: string) => void;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

const generateId = () => Math.random().toString(36).substring(2, 9);

const initialJobs: jobProps[] = [
  {
    _id: '1',
    title: 'Desenvolvedor Frontend',
    department: 'Tecnologia',
    type: 'presencial',
    expirationDate: '2025-12-31',
    description: 'Desenvolvimento de interfaces modernas.',
    requirements: ['React', 'Tailwind CSS', 'JavaScript'],
    location: 'Maputo',
    benefits: ['Plano de saúde', 'Vale refeição'],
  },
  {
    _id: '2',
    title: 'Analista de Marketing',
    department: 'Marketing',
    type: 'virtual',
    expirationDate: '2023-11-15',
    description: 'Campanhas digitais e SEO.',
    requirements: ['Google Ads', 'SEO', 'Social Media'],
    location: 'Remoto',
    benefits: ['Horário flexível'],
  },
  // Novas vagas adicionadas com datas atuais (2025)
  {
    _id: '3',
    title: 'Engenheiro Civil',
    department: 'Construção Civil',
    type: 'presencial',
    expirationDate: '2024-07-31',
    description: 'Gerenciamento de obras e projetos rodoviários.',
    requirements: ['AutoCAD', 'MS Project', 'Experiência em fiscalização'],
    location: 'Maputo',
    benefits: ['Assistência médica', 'Vale transporte'],
  },
  {
    _id: '4',
    title: 'Especialista em Suporte Técnico',
    department: 'TI',
    type: 'híbrido',
    expirationDate: '2025-08-15',
    description: 'Suporte técnico e manutenção de sistemas internos.',
    requirements: ['Conhecimento em redes', 'Windows/Linux', 'Atendimento ao cliente'],
    location: 'Maputo',
    benefits: ['Vale alimentação', 'Home office parcial'],
  },
];

export const JobsProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<jobProps[]>(initialJobs);

  const addJob = (job: Omit<jobProps, '_id'>) => {
    const newJob: jobProps = { ...job, _id: generateId() };
    setJobs((prev) => [...prev, newJob]);
  };

  const deleteJob = (id: string) => {
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) throw new Error('useJobs must be used within a JobsProvider');
  return context;
};
