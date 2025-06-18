import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from '../../components/ui/Button';
import { Header } from "@/components/headers";
import { Footer } from "@/components/footer";

export const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const jobs = [
    {
      id: "1",
      title: "Desenvolvedor Frontend",
      description: `Estamos à procura de um Desenvolvedor Frontend talentoso e apaixonado por criar interfaces modernas, acessíveis e responsivas. 
Você fará parte de uma equipe dinâmica de tecnologia, colaborando com designers, back-end developers e stakeholders para construir aplicações web escaláveis e de alto desempenho.

Responsabilidades incluem:
- Desenvolver novas funcionalidades com foco na experiência do usuário;
- Garantir a performance e compatibilidade entre diferentes navegadores e dispositivos;
- Trabalhar com componentes reutilizáveis e arquitetura orientada a componentes;
- Participar de revisões de código, planejamento de sprints e integração contínua.

Procuramos um profissional proativo, com boa comunicação e vontade de aprender continuamente. 
Oferecemos um ambiente colaborativo, incentivo à inovação e oportunidade de crescimento dentro da empresa.`,
      requirements: ["React", "Tailwind CSS", "APIs REST"],
      location: "Cidade de Maputo",
      benefits: ["Seguro de saúde", "Vale alimentação"],
      type: "Presencial",
      department: "Tecnologia",
      expirationDate: "2025-12-31",
      salary: "80.000 MZN",
      contact: "rh@empresa.com",
    },
    {
      id: "2",
      title: "Analista de Marketing",
      description: `Estamos em busca de um Analista de Marketing criativo e analítico para liderar campanhas digitais e estratégias de posicionamento da marca. 
Você irá colaborar com diversos departamentos para desenvolver ações de marketing voltadas à performance e ao engajamento do público-alvo.

Responsabilidades incluem:
- Criar, executar e otimizar campanhas pagas e orgânicas;
- Monitorar KPIs e gerar relatórios de desempenho;
- Gerenciar redes sociais, SEO e anúncios em plataformas como Google Ads e Meta Ads;
- Participar de brainstorms para novos produtos e estratégias.

Buscamos alguém com pensamento estratégico, domínio de ferramentas digitais e sede de inovação. 
Oferecemos ambiente flexível, suporte contínuo e possibilidade de crescimento na área.`,
      requirements: ["SEO", "Google Ads", "Redes Sociais"],
      location: "Remoto",
      benefits: ["Horário flexível", "Bônus por desempenho"],
      type: "Virtual",
      department: "Marketing",
      expirationDate: "2025-11-15",
      salary: "60.000 MZN",
      contact: "rh@empresa.com",
    },
  ];

  const job = jobs.find((job) => job.id === id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {!job ? (
          <div className="p-6 max-w-xl mx-auto mt-10 bg-red-50 border border-red-200 text-red-700 rounded">
            <p className="text-center font-medium">
              Vaga não encontrada.
            </p>
            <div className="text-center mt-4">
              <button
                aria-label="Voltar para lista de vagas"
                className="text-[#2563EB] underline hover:text-[#1E3A8A] transition"
                onClick={() => navigate("/vagas")}
              >
                ← Voltar para lista de vagas
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg px-4 md:px-8 py-8">
            <h1 className="text-3xl font-bold text-[#2563EB] mb-2 py-5">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              <span className="bg-[#2563EB] text-white px-3 py-1 rounded">{job.type}</span>
              <span className="bg-[#1E3A8A] text-white px-3 py-1 rounded">{job.department}</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded">
                Expira em: {new Date(job.expirationDate).toLocaleDateString("pt-PT")}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
                Salário: {job.salary}
              </span>
            </div>

            <p className="text-gray-700 mb-6 py-5 whitespace-pre-line">{job.description}</p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Requisitos</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Local</h3>
              <p className="text-gray-700 mt-1">{job.location}</p>
            </div>

            {job.benefits && job.benefits.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Benefícios</h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Contato</h3>
              <a
                href={`mailto:${job.contact}`}
                className="text-[#2563EB] underline hover:text-[#1E3A8A] transition"
                aria-label="Enviar e-mail para recrutador"
              >
                {job.contact}
              </a>
            </div>

            <Button
              className="mt-4 px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1E3A8A] transition"
              onClick={() => navigate(`/candidatar/${job.id}`)}
              aria-label="Candidatar-se à vaga"
            >
              Candidatar-se
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
