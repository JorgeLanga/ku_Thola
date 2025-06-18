import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-700 via-cyan-800 to-blue-950 flex flex-col gap-4 items-center justify-center h-screen text-white">
      <span className="text-5xl">😕</span>
      <h1 className="font-bold text-2xl">Ops... Parece que você se perdeu.</h1>
      <p className="text-lg text-cyan-100">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-white text-cyan-800 rounded-md text-base font-semibold shadow hover:bg-cyan-100 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};