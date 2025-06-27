import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/headers";
import { Footer } from "@/components/layout/footer";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface FeedbackData {
  candidateName: string;
  message: string;
  status: "approved" | "rejected" | "interview" | "pending";
  feedbackDate: string;
}

export const InterviewFeedback = () => {
  const { id } = useParams<{ id: string }>();
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de API
    const fetchFeedback = async () => {
      // Aqui substituir por chamada real de API (ex: `/api/feedbacks/${id}`)
      const simulatedResponse: FeedbackData = {
        candidateName: "Domingos Timane",
        message: "Parabéns! Você demonstrou boa capacidade técnica e ótimo raciocínio lógico. Estamos avançando com sua contratação.",
        status: "approved",
        feedbackDate: "2025-06-26T10:00:00Z",
      };

      setTimeout(() => {
        setFeedback(simulatedResponse);
        setLoading(false);
      }, 1000);
    };

    if (id) fetchFeedback();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Carregando feedback...
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        Feedback não encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto p-6 mt-10 bg-white shadow rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Feedback da Entrevista
        </h1>

        <p className="text-gray-700 mb-2">
          <strong>Nome do Candidato:</strong> {feedback.candidateName}
        </p>

        <div className="mb-4">
          <strong>Status Final:</strong>{" "}
          <StatusBadge status={feedback.status} />
        </div>

        <div className="mb-6">
          <strong>Mensagem:</strong>
          <p className="mt-2 text-gray-800 border-l-4 border-blue-500 pl-4 italic">
            {feedback.message}
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Recebido em:{" "}
          {new Date(feedback.feedbackDate).toLocaleString("pt-PT", {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </p>
      </main>
      <Footer />
    </div>
  );
};
