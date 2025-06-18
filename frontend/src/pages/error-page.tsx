import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-white flex flex-col gap-4 items-center justify-center h-screen text-white">
      <span className="text-5xl">😕</span>
      <h1 className="font-bold text-2xl">Ops... Parece que você se perdeu.</h1>
      <p className="text-lg text-blue-100">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-white text-[#2563EB] rounded-md text-base font-semibold shadow hover:bg-blue-100 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};