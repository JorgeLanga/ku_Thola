import type { FeedbackProps } from "@/types/candidateProps"; 

export const FeedbackCard = ({ message, status }: FeedbackProps) => {
  const statusColor = status === "approved" ? "text-green-600" : "text-red-600";
  return (
    <div className={`p-4 border rounded-lg bg-white ${statusColor}`}>
      <p className="font-medium">{message}</p>
    </div>
  );
};
