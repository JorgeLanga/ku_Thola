import { useNavigate } from 'react-router-dom';

export const JobsList = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      id: 1,
      title: 'Desenvolvedor Frontend',
      department: 'Tecnologia',
      type: 'Presencial',
      expirationDate: '2023-12-31',
    },
    {
      id: 2,
      title: 'Analista de Marketing',
      department: 'Marketing',
      type: 'Virtual',
      expirationDate: '2023-11-15',
    },
    {
      id: 3,
      title: 'Web Designer',
      department: 'Tecnologia',
      type: 'Virtual',
      expirationDate: '2023-11-15',
    },
    {
      id: 4,
      title: 'Gerente de Projetos',
      department: 'Gestão',
      type: 'Presencial',
      expirationDate: '2023-12-31',
    },
    {
      id: 5,
      title: 'Desenvolvedor Backend',
      department: 'Tecnologia',
      type: 'Presencial',
      expirationDate: '2023-12-31',
    },
    {
      id: 6,
      title: 'Analista de Dados',
      department: 'Tecnologia',
      type: 'Virtual',
      expirationDate: '2023-11-15',
    },
  ];

  return (
    <body className='bg-black bg-[url(../img/fundo-2.jpg)] bg-cover bg-center py-10'>
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Vagas Disponíveis</h1>
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="bg-neutral-100 shadow-xl/20 rounded-3xl p-2 border-4"
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
              onClick={() => navigate(`/vagas/${job.id}`)}
              className="inline-block text-[#2563EB] hover:text-white hover:bg-[#2563EB] font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              aria-label={`Ver detalhes da vaga: ${job.title}`}
            >
              Ver Detalhes &rarr;
            </button>
          </li>
        ))}
      </ul>
    </div>
    </body>
  );
};
