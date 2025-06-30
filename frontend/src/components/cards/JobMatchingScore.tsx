import React from "react";

interface Props {
  jobRequirements: string[];
  candidateSkills: string[];
}

export const JobMatchingScore: React.FC<Props> = ({ jobRequirements, candidateSkills }) => {
  // Calcula a compatibilidade
  const matchCount = jobRequirements.filter(req =>
    candidateSkills.map(s => s.toLowerCase()).includes(req.toLowerCase())
  ).length;

  const score = Math.round((matchCount / jobRequirements.length) * 100);

  // Define a cor com base no score
  const getColor = () => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className={`h-2 rounded-full ${getColor()}`} style={{ width: `${score}%` }}></div>
        </div>
        <span className="text-sm font-medium text-gray-700 w-12 text-right">{score}%</span>
      </div>
    </div>
  );
};
