import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const FinalFeedback = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'approved' | 'rejected' | ''>('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simula envio
    console.log('Feedback enviado:', { message, status });

    setShowToast(true); // Mostrar toast
    setTimeout(() => {
      setShowToast(false);
      navigate('/recruiter-dashboard'); // Redirecionar após 3s
    }, 3000);
  };

  return (
    <div className="relative max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Enviar Feedback Final</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem Final:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Escreva sua mensagem aqui..."
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'approved' | 'rejected')}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>Selecione</option>
            <option value="approved">Aprovado</option>
            <option value="rejected">Não Selecionado</option>
          </select>
        </div>
        <Button type="submit" text="Enviar Feedback" onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } />
      </form>

      {showToast && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-bounce">
          ✅ Feedback enviado com sucesso!
        </div>
      )}
    </div>
  );
};
