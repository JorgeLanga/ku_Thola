import React from 'react';

interface ProgressBarProps {
  progress: number; // valor entre 0 e 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Limita o valor para não ultrapassar 100%
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className="w-full h-4 bg-gray-200 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={safeProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso da candidatura"
    >
      <div
        className="h-full bg-primary-600 transition-all duration-700 ease-in-out"
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};
