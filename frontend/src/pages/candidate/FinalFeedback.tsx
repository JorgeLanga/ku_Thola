import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ToastNotification } from "../../components/ui/ToastNotification";

type FeedbackStatus = "approved" | "rejected" | "";

export const FinalFeedback = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FeedbackStatus>("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: enviar feedback para backend via API

    console.log("Feedback enviado:", { message, status });

    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
    navigate("/recruiter-dashboard");
  };

  return (
    <div className="relative max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Enviar Feedback Final</h1>
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de envio de feedback final">
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
            aria-required="true"
            placeholder="Escreva sua mensagem aqui..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as FeedbackStatus)}
            required
            aria-required="true"
            aria-label="Selecione o status do candidato"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="approved">Aprovado</option>
            <option value="rejected">Não Selecionado</option>
          </select>
        </div>
        <Button type="submit" aria-label="Enviar Feedback">
          Enviar Feedback
        </Button>
      </form>

      {showToast && (
        <ToastNotification
          message="✅ Feedback enviado com sucesso!"
          onClose={handleToastClose}
          duration={3000}
          ariaLive="polite"
        />
      )}
    </div>
  );
};
