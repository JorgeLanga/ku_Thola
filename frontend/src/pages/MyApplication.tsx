import React from 'react';
import ProgressBar from '../components/ProgressBar';

const MyApplication = () => {
    const applicationStatus = [
        { stage: 'Recebido', completed: true },
        { stage: 'Em Avaliação', completed: true },
        { stage: 'Entrevista', completed: false },
        { stage: 'Resultado', completed: false },
    ];

    const currentStatus = applicationStatus.find(status => !status.completed) || applicationStatus[applicationStatus.length - 1];

    return (
        <div className="my-application">
            <h1>Minha Candidatura</h1>
            <ProgressBar progress={applicationStatus.filter(status => status.completed).length / applicationStatus.length * 100} />
            <div className="application-info">
                <h2>Vaga aplicada: {currentStatus.stage}</h2>
                <p>Estado atual: {currentStatus.stage}</p>
                <p>Mensagem personalizada do recrutador: {currentStatus.completed ? "Obrigado por sua candidatura!" : "Estamos avaliando sua candidatura."}</p>
                {currentStatus.stage === 'Entrevista' && <p>Data da entrevista: 15 de Outubro, 10:00 AM</p>}
            </div>
        </div>
    );
};

export default MyApplication;