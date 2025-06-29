import { useNavigate } from "react-router-dom";
import { Header } from "@/components/headers"; 
import { Footer } from "@/components/footer";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black bg-[url('../img/fundo-2.jpg')] bg-cover bg-center min-h-screen flex flex-col">
      <Header />

      {/* Hero + Benefícios em Main para manter altura mínima */}
      <main className="flex-grow">
        {/* Hero Section mais espaçada */}
        <section className="text-center py-32 px-6">
          <h2 className="text-3xl md:text-5xl text-gray-300 font-bold mb-6">
            Encontre a sua próxima oportunidade de trabalho!
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Conectamos talentos a empresas de forma rápida, eficiente e digital.
            Seja candidato ou recrutador, comece agora mesmo.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
            <button
              className="bg-gray-300 border font-semibold border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              onClick={() => navigate("/vagas")}
            >
              Vagas Disponíveis
            </button>

            <button
              className="bg-gray-300 border font-semibold border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              onClick={() => navigate("/rh/login")}
            >
              Recrutador
            </button>
          </div>
        </section>

        {/* Destaques / Benefícios mais para baixo */}
        <section className="py-16 px-6  text-center">
          <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Candidatura Rápida</h3>
              <p className="text-white">
                Candidate-se com poucos cliques. Simples e direto ao ponto.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Gestão para Recrutadores</h3>
              <p className="text-white">
                Crie e gerencie vagas facilmente. Acompanhe candidaturas em tempo real.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Plataforma Segura</h3>
              <p className="text-white">
                Seus dados são tratados com segurança e responsabilidade.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
