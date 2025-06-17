import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Sidebar } from '../components/Sidebar';

type Job = {
    id: string | number;
    title: string;
    description: string;
    type: string;
    department: string;
    deadline: string;
};

const ManageJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobType, setJobType] = useState(''); // e.g., 'presencial' or 'virtual'
    const [jobDepartment, setJobDepartment] = useState('');
    const [jobDeadline, setJobDeadline] = useState('');

    useEffect(() => {
        // Fetch jobs from API or database
        const fetchJobs = async () => {
            // Replace with actual API call
            const response = await fetch('/api/jobs');
            const data = await response.json();
            setJobs(data);
        };

        fetchJobs();
    }, []);

    const handleCreateJob = async () => {
        const newJob = {
            title: jobTitle,
            description: jobDescription,
            type: jobType,
            department: jobDepartment,
            deadline: jobDeadline,
        };

        // Replace with actual API call to create job
        await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        });

        // Refresh job list
        setJobTitle('');
        setJobDescription('');
        setJobType('');
        setJobDepartment('');
        setJobDeadline('');
        const response = await fetch('/api/jobs');
        const data = await response.json();
        setJobs(data);
    };

    const handleDeleteJob = async (jobId: string | number) => {
        // Replace with actual API call to delete job
        await fetch(`/api/jobs/${jobId}`, {
            method: 'DELETE',
        });

        // Refresh job list
        const response = await fetch('/api/jobs');
        const data = await response.json();
        setJobs(data);
    };

    return (
        <div className="manage-jobs">
            <Sidebar />
            <div className="manage-jobs-content">
                <h1>Gerir Vagas</h1>
                <div className="job-form">
                    <input
                        type="text"
                        placeholder="Título da Vaga"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição da Vaga"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Tipo (presencial/virtual)"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Departamento"
                        value={jobDepartment}
                        onChange={(e) => setJobDepartment(e.target.value)}
                    />
                    <input
                        type="date"
                        value={jobDeadline}
                        onChange={(e) => setJobDeadline(e.target.value)}
                    />
                    <Button text="Criar Vaga" onClick={handleCreateJob} />
                </div>
                <h2>Vagas Disponíveis</h2>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                            <Button text="Eliminar" onClick={() => handleDeleteJob(job.id)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageJobs;