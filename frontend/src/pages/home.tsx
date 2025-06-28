import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/headers";
import { Footer } from "@/components/layout/footer";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black bg-[url('../img/fundo-2.jpg')] bg-cover bg-center min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="text-center py-32 px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Encontre a sua próxima oportunidade com a{" "}
            <span className="text-blue-500">KU THOLA</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Conectamos talentos a empresas de forma rápida, eficiente e digital.
            Seja candidato ou recrutador, comece agora mesmo.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <button
              className="bg-gray-100 text-blue-600 border border-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              onClick={() => navigate("/login")}
            >
              Sou Candidato
            </button>
            <button
              className="bg-gray-100 text-blue-600 border border-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              onClick={() => navigate("/rh/login")}
            >
              Sou Recrutador
            </button>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🚀 Candidatura Rápida</h3>
              <p className="text-white">
                Candidate-se com poucos cliques. Simples e direto ao ponto.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🧠 Gestão para Recrutadores</h3>
              <p className="text-white">
                Crie e gerencie vagas facilmente. Acompanhe candidaturas em tempo real.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🔒 Plataforma Segura</h3>
              <p className="text-white">
                Seus dados são tratados com segurança e responsabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Testemunho / Social Proof */}
        <section className="py-16 px-4 text-center text-white">
          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Mais de 100 candidatos já passaram por aqui!</h3>
            <blockquote className="italic text-gray-200">
              “A KU THOLA me ajudou a conseguir meu primeiro estágio em menos de um mês.”
            </blockquote>
            <p className="mt-2 font-medium text-blue-400">— Carlos M., Eng. Civil Estagiário</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
