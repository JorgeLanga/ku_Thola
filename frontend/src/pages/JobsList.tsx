import React from 'react';
import { Link } from 'react-router-dom';

const JobsList = () => {
    const jobs = [
        {
            id: 1,
            title: 'Desenvolvedor Frontend',
            department: 'Tecnologia',
            type: 'Presencial',
            expirationDate: '2023-12-31',
        },
        {
            id: 2,
            title: 'Analista de Marketing',
            department: 'Marketing',
            type: 'Virtual',
            expirationDate: '2023-11-15',
        },
        // Adicione mais vagas conforme necessário
    ];

    return (
        <div className="jobs-list">
            <h1>Vagas Disponíveis</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>Departamento: {job.department}</p>
                        <p>Tipo: {job.type}</p>
                        <p>Data de Término: {job.expirationDate}</p>
                        <Link to={`/jobs/${job.id}`}>Ver Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobsList;