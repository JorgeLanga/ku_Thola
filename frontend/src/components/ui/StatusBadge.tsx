import React from "react";

export type BadgeStatus =
  | "approved"
  | "rejected"
  | "pending"
  | "interview"
  | "done"
  | "cancelled"
  | "unknown";

interface StatusBadgeProps {
  status: BadgeStatus;
}

const statusStyles: Record<BadgeStatus, string> = {
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
  interview: "bg-blue-100 text-blue-700",
  done: "bg-purple-100 text-purple-700",
  cancelled: "bg-gray-200 text-gray-700",
  unknown: "bg-gray-100 text-gray-600",
};

const statusLabels: Record<BadgeStatus, string> = {
  approved: "Aprovado",
  rejected: "Rejeitado",
  pending: "Pendente",
  interview: "Entrevista",
  done: "Finalizado",
  cancelled: "Cancelado",
  unknown: "Desconhecido",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const style = statusStyles[status] ?? statusStyles.unknown;
  const label = statusLabels[status] ?? statusLabels.unknown;

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${style}`}
      aria-label={`Status da candidatura: ${label}`}
      role="status"
    >
      {label}
    </span>
  );
};
