import React from 'react';
// import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const RecruiterDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <Button onClick={() => navigate('/')}>← Voltar ao Home</Button>
      {/* <Sidebar /> */}
      <main className="flex-1 p-4 sm:p-8 w-full max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard do Recrutador</h1>
        <p className="text-gray-600 mt-2">Gerencie suas vagas e acompanhe o progresso dos candidatos.</p>

        {/* Cards Resumo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-600">Total de Vagas</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold">12</p>
          </div>

          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-green-600">Candidatos</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold">48</p>
          </div>

          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-yellow-600">Entrevistas Agendadas</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold">5</p>
          </div>
        </div>

        {/* Ações rápidas */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Ações Rápidas</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Button onClick={() => navigate('/rh/vagas')}>Criar Nova Vaga</Button>
            <Button onClick={() => navigate('/rh/candidatos')}>Ver Candidatos</Button>
            <Button onClick={() => navigate('/rh/avaliacoes')}>Ver Avaliações</Button>
          </div>
        </div>
      </main>
    </div>
  );
};
