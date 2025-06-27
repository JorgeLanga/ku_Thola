import React from "react";

interface StatusBadgeProps {
  status: "approved" | "rejected" | "pending" | "interview";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colorMap = {
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
    pending: "bg-yellow-100 text-yellow-700",
    interview: "bg-blue-100 text-blue-700",
  };

  const labelMap = {
    approved: "Aprovado",
    rejected: "Rejeitado",
    pending: "Pendente",
    interview: "Entrevista",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${colorMap[status]}`}
      aria-label={`Status da candidatura: ${labelMap[status]}`}
      role="status"
    >
      {labelMap[status]}
    </span>
  );
};
