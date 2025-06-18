import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const CandidateEvaluation = () => {
  const [technicalEvaluation, setTechnicalEvaluation] = useState('');
  const [behavioralEvaluation, setBehavioralEvaluation] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [status, setStatus] = useState('Aprovado');
  const navigate = useNavigate();
  const { candidateId } = useParams<{ candidateId: string }>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar chamada API para salvar a avaliação
    console.log({
      technicalEvaluation,
      behavioralEvaluation,
      generalNotes,
      status,
    });
    // Redireciona para a página de feedback final do candidato
    if (candidateId) {
      navigate(`/rh/candidato/${candidateId}/feedback`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-semibold mb-6">Avaliação do Candidato</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Técnica:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 resize-y"
            rows={4}
            value={technicalEvaluation}
            onChange={(e) => setTechnicalEvaluation(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Comportamental:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 resize-y"
            rows={4}
            value={behavioralEvaluation}
            onChange={(e) => setBehavioralEvaluation(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Notas Gerais:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 resize-y"
            rows={3}
            value={generalNotes}
            onChange={(e) => setGeneralNotes(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Status:</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Aprovado">Aprovado</option>
            <option value="Não selecionado">Não selecionado</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Salvar Avaliação
        </button>
      </form>
    </div>
  );
};
