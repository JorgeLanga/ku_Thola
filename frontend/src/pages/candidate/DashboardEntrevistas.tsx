import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/Button";

type Entrevista = {
  id: string;
  vaga: string;
  empresa: string;
  data: Date;
};

const entrevistasMock: Entrevista[] = [
  {
    id: "1",
    vaga: "Engenheiro Júnior",
    empresa: "Construtora Maputo",
    data: new Date(2025, 6, 2, 10, 30),
  },
  {
    id: "2",
    vaga: "Designer UX",
    empresa: "Agência Criativa",
    data: new Date(2025, 6, 5, 14, 0),
  },
];

const availableDates = ["2025-07-01", "2025-07-02", "2025-07-03", "2025-07-04"];
const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export const DashboardEntrevistas = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showAgendamento, setShowAgendamento] = useState(false);
  const [selectedScheduleDate, setSelectedScheduleDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const entrevistasDoDia = entrevistasMock.filter(
    (e) => e.data.toDateString() === selectedDate.toDateString()
  );

  const handleAgendamento = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedScheduleDate || !selectedTime) return alert("Preencha todos os campos.");
    
    setSuccessMessage(`✅ Entrevista agendada para ${selectedScheduleDate} às ${selectedTime}`);
    setShowAgendamento(false);

    setTimeout(() => setSuccessMessage(""), 6000); // mensagem desaparece após 6s
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-700">Entrevistas Agendadas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendário */}
        <Calendar
          locale="pt-BR"
          onChange={(date) => setSelectedDate(date as Date)}
          value={selectedDate}
          tileClassName={({ date }) => {
            const hasInterview = entrevistasMock.some(
              (e) => e.data.toDateString() === date.toDateString()
            );
            return hasInterview ? "bg-blue-100 rounded-full" : "";
          }}
        />

        {/* Entrevistas do dia */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">
            Entrevistas em {format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </h2>

          {entrevistasDoDia.length === 0 ? (
            <p className="text-gray-500 italic">Nenhuma entrevista agendada.</p>
          ) : (
            entrevistasDoDia.map((ent) => (
              <div
                key={ent.id}
                className="mb-4 border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded"
              >
                <p className="font-medium">{ent.vaga}</p>
                <p className="text-sm text-gray-600">{ent.empresa}</p>
                <p className="text-sm text-gray-500">{format(ent.data, "HH:mm")}h</p>
              </div>
            ))
          )}

          <Button className="mt-4" onClick={() => setShowAgendamento(true)}>
            {entrevistasDoDia.length > 0 ? "Reagendar" : "Agendar Entrevista"}
          </Button>
        </div>
      </div>

      {/* Modal de Agendamento */}
      {showAgendamento && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowAgendamento(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-md w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Agendar Entrevista</h3>
            <form onSubmit={handleAgendamento} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Data disponível</label>
                <select
                  value={selectedScheduleDate}
                  onChange={(e) => setSelectedScheduleDate(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                >
                  <option value="">Selecione uma data</option>
                  {availableDates.map((date) => (
                    <option key={date} value={date}>
                      {format(new Date(date), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Horário</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                >
                  <option value="">Selecione o horário</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="ghost" onClick={() => setShowAgendamento(false)} type="button">
                  Cancelar
                </Button>
                <Button type="submit">Confirmar</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mensagem de sucesso */}
      {successMessage && (
        <div
          className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded"
          role="alert"
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};
