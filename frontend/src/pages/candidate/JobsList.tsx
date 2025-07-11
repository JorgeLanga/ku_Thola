import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/headers"; 
import { Footer } from "@/components/footer";
import { useJobs } from '@/context/jobsContext';

export const JobsList = () => {
  const navigate = useNavigate();
  const { jobs } = useJobs();

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-4xl mx-auto mt-10 px-4">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Vagas Disponíveis</h1>
          <ul className="space-y-8">
            {jobs.map(job => (
              <li
                key={job._id}
                className="bg-gray-100 shadow-xl/20 rounded-3xl p-4 px-6 border-4"
              >
                <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
                <p className="text-gray-700 mt-1">
                  <strong>Departamento:</strong> {job.department}
                </p>
                <p className="text-gray-700">
                  <strong>Tipo:</strong> {job.type}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Data de Término:</strong> {job.expirationDate}
                </p>
                <button
                  onClick={() => navigate(`/vagas/${job._id}`)}
                  className="inline-block text-[#2563EB] hover:text-white hover:bg-[#2563EB] font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  aria-label={`Ver detalhes da vaga: ${job.title}`}
                >
                  Ver Detalhes &rarr;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};
