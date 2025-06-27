import React, { useState, useEffect } from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export const CandidateNotifications = () => {
  // Simula notificações recebidas
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulação: pegar notificações do backend
    const fetchedNotifications: Notification[] = [
      {
        id: "1",
        title: "Status da candidatura atualizado",
        message: "Sua candidatura para Desenvolvedor Frontend mudou para 'Em Avaliação'.",
        date: "2025-06-20T15:30:00Z",
        read: false,
      },
      {
        id: "2",
        title: "Entrevista agendada",
        message: "Sua entrevista para Analista de Marketing foi marcada para 10 de Julho às 09:00.",
        date: "2025-06-18T09:00:00Z",
        read: true,
      },
      {
        id: "3",
        title: "Mensagem do recrutador",
        message: "Por favor, envie seu portfólio atualizado para análise.",
        date: "2025-06-17T14:00:00Z",
        read: false,
      },
    ];

    setNotifications(fetchedNotifications);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-grow max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Notificações</h1>

        {notifications.length === 0 && (
          <p className="text-gray-600">Nenhuma notificação no momento.</p>
        )}

        <ul className="space-y-4">
          {notifications.map(({ id, title, message, date, read }) => (
            <li
              key={id}
              className={`p-4 border rounded-md ${
                read ? "bg-gray-100" : "bg-blue-50 border-blue-400"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                {!read && (
                  <button
                    onClick={() => markAsRead(id)}
                    className="text-sm text-blue-600 hover:underline focus:outline-none"
                    aria-label={`Marcar notificação "${title}" como lida`}
                  >
                    Marcar como lida
                  </button>
                )}
              </div>
              <p className="text-gray-700">{message}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(date).toLocaleString("pt-PT", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </p>
            </li>
          ))}
        </ul>
      </main>
    
    </div>
  );
};
