import type { jobProps } from "@/types/recruiterProps"; 


export const JobCard = ({ title, department, type, location, expirationDate }: jobProps) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md border">
      <h2 className="text-lg font-bold text-[#111827]">{title}</h2>
      <p className="text-sm text-gray-500">{department} · {type}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-xs text-gray-400">Até {expirationDate}</p>
    </div>
  );
};
