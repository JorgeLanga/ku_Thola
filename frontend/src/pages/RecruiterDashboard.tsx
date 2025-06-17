import React from 'react';
import Sidebar from '../components/Sidebar';

const RecruiterDashboard: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold">Dashboard do Recrutador</h1>
                <p className="mt-2">Aqui você pode gerenciar candidatos e vagas.</p>
                {/* Aqui você pode adicionar a lógica para listar candidatos e filtros */}
            </div>
        </div>
    );
};

export default RecruiterDashboard;