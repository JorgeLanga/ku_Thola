import type { ProgressBarProps } from "@/types/candidateProps";

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg h-3 relative">
      <div
        className="h-3 bg-[#2563EB] rounded-lg transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
      <span className="absolute right-0 -top-6 text-sm font-medium text-gray-700">
        {Math.round(progress)}%
      </span>
    </div>
  );
};
