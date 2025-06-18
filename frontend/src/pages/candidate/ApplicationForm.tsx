import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [interest, setInterest] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com backend/API
    console.log({ name, email, phone, cv, interest, coverLetter });
    // Redireciona para a página de feedback do candidato
    navigate('/minha-candidatura');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-semibold mb-8 text-primary-700">
        Formulário de Candidatura
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/** Campo Nome */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Nome completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Digite seu nome completo"
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600
                       transition"
          />
        </div>

        {/** Campo Email */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="exemplo@dominio.com"
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600
                       transition"
          />
        </div>

        {/** Campo Telefone */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Telefone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+258 8XX XXX XXX"
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600
                       transition"
          />
        </div>

        {/** Upload do CV */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Upload do CV (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              e.target.files && e.target.files[0] ? setCv(e.target.files[0]) : setCv(null)
            }
            required
            className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md
                       cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          />
        </div>

        {/** Área de Interesse */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Área de Interesse</label>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
            placeholder="Exemplo: Desenvolvimento Frontend"
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600
                       transition"
          />
        </div>

        {/** Carta de Apresentação */}
        <div>
          <label className="block text-sm font-medium text-gray-800">Carta de Apresentação</label>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
            rows={5}
            placeholder="Escreva sua carta de apresentação aqui..."
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600
                       transition resize-none"
          />
        </div>

            <div className=" flex justify-center ">
        {/** Botão Enviar */}
        <button
          type="submit"
          className=" bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition" 
        >
          Enviar Candidatura
        </button>
        </div>
      </form>
    </div>
  );
};