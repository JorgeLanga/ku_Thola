import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '@/components/ui/ProgressBar';  // caminho relativo corrigido para alias

export const MyApplication = () => {
  const navigate = useNavigate();

  const applicationStatus = [
    { stage: 'Recebido', completed: true },
    { stage: 'Em Avaliação', completed: true },
    { stage: 'Entrevista', completed: false },
    { stage: 'Resultado', completed: false },
  ];

  const currentStatus = applicationStatus.find(status => !status.completed) || applicationStatus[applicationStatus.length - 1];

  const progressPercent = (applicationStatus.filter(status => status.completed).length / applicationStatus.length) * 100;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-black bg-cover bg-center bg-[url('/img/fundo-2.jpg')] p-6"
      role="main"
      aria-label="Status da candidatura"
    >
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary-700">Minha Candidatura</h1>

        <ProgressBar progress={progressPercent} />

        <section className="mt-8 space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold text-gray-900">
            Status atual: <span className="text-primary-600">{currentStatus.stage}</span>
          </h2>

          <p>
            {currentStatus.completed
              ? 'Obrigado por sua candidatura!'
              : 'Estamos avaliando sua candidatura.'}
          </p>

          {currentStatus.stage === 'Entrevista' && (
            <p className="font-medium text-gray-900">
              Data da entrevista: <time dateTime="2025-10-15T10:00">15 de Outubro, 10:00 AM</time>
            </p>
          )}

          <button
            onClick={() => navigate('/home')}
            className="mt-6 inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition"
            aria-label="Voltar para a página inicial"
          >
            Voltar para Home
          </button>
        </section>
      </div>
    </div>
  );
};
