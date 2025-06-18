import React from 'react';
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { Header } from '@/components/header1';
import { Footer } from '@/components/footer1';

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Encontre a sua próxima oportunidade de trabalho!
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Conectamos talentos a empresas de forma rápida, eficiente e digital. Seja candidato ou recrutador, comece agora mesmo.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

           <div>
    
      <button  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={() => navigate("/vagas")}>Ver Vagas Disponíveis</button>

      <button  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition" onClick={() => navigate("/rh/login")}>Sou Recrutador</button>
           </div>
          
        </div>
      </section>

      {/* Destaques ou Benefícios */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Candidatura Rápida</h3>
            <p className="text-gray-600">Candidate-se com poucos cliques. Simples e direto ao ponto.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Gestão para Recrutadores</h3>
            <p className="text-gray-600">Crie e gerencie vagas facilmente. Acompanhe candidaturas em tempo real.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Plataforma Segura</h3>
            <p className="text-gray-600">Seus dados são tratados com segurança e responsabilidade.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
