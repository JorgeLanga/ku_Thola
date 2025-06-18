import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Header } from "@/components/headers"; 
import { Footer } from "@/components/footer";

export const MyApplication = () => {
  const navigate = useNavigate();

  const applicationStatus = [
    { stage: 'Recebido', completed: true },
    { stage: 'Em Avaliação', completed: true },
    { stage: 'Entrevista', completed: false },
    { stage: 'Resultado', completed: false },
  ];

  const currentStatus = applicationStatus.find(status => !status.completed) || applicationStatus[applicationStatus.length - 1];

  // Calcula progresso em %
  const progressPercent = (applicationStatus.filter(status => status.completed).length / applicationStatus.length) * 100;

  return (
<<<<<<< HEAD
    <body className="bg-black bg-[url('../img/fundo-2.jpg')] bg-cover bg-center min-h-screen flex flex-col">
    
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
=======
   <div>
     <Header />
    <main>
       <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
>>>>>>> 658406b6ec3537ac5ce919c5d2e39cd1d17af22d
      <h1 className="text-2xl font-bold mb-6">Minha Candidatura</h1>

      <ProgressBar progress={progressPercent} />

      <div className="mt-6 space-y-3 text-gray-700">
        <h2 className="text-xl font-semibold">Status atual: {currentStatus.stage}</h2>

        <p>
          {currentStatus.completed
            ? "Obrigado por sua candidatura!"
            : "Estamos avaliando sua candidatura."}
        </p>

        {currentStatus.stage === 'Entrevista' && (
          <p className="font-medium text-gray-900">Data da entrevista: 15 de Outubro, 10:00 AM</p>
        )}

        {/* Exemplo de botão para voltar para Home */}
        <button
          className="mt-6 px-4 py-2 bg-[#2563EB] text-white rounded hover:bg-[#1E3A8A] transition"
          onClick={() => navigate('/home')}
        >
          Voltar para Home
        </button>
      </div>
    </div>
<<<<<<< HEAD
    </body>
=======
    </main>
     <div className="fixed bottom-0 left-0 w-full ">
    <Footer />
  </div>

   </div>
>>>>>>> 658406b6ec3537ac5ce919c5d2e39cd1d17af22d
  );
};
