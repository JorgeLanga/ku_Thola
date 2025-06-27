import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/layout/headers";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/Button";

const availableDates = [
  "2025-07-01",
  "2025-07-02",
  "2025-07-03",
  "2025-07-04",
];

const availableTimes = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
];

export const InterviewSchedule = () => {
  const { candidateId } = useParams<{ candidateId: string }>();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Por favor, selecione uma data e horário.");
      return;
    }

    setIsSubmitting(true);

    // Simula chamada API para agendar entrevista
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        `Entrevista agendada para ${selectedDate} às ${selectedTime}`
      );

      // Após 3s, redireciona para dashboard do candidato ou outra página
      setTimeout(() => {
        navigate(`/candidato/${candidateId}/dashboard`);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Agendar Entrevista
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Escolha a data
            </label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Selecione uma data
              </option>
              {availableDates.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("pt-PT", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Escolha o horário
            </label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Selecione o horário
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
          </Button>
        </form>

        {successMessage && (
          <div
            className="mt-6 p-4 bg-green-100 text-green-800 rounded"
            role="alert"
          >
            {successMessage}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
