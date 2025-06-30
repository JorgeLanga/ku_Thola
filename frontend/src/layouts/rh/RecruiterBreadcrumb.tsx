import { Link } from "react-router-dom";

interface Props {
  path: string;
}

export const RecruiterBreadcrumb = ({ path }: Props) => {
  const parts = path.split("/").filter(Boolean);

  const format = (slug: string) => {
    return slug
      .replace("-", " ")
      .replace("dashboard", "Painel")
      .replace("vagas", "Vagas")
      .replace("candidatos", "Candidatos")
      .replace("avaliacoes", "Avaliações")
      .replace("candidato", "Candidato")
      .replace("avaliacao", "Avaliação")
      .replace("feedback", "Feedback")
      .replace("perfil", "Perfil");
  };

  return (
    <nav className="text-sm text-gray-600 space-x-2">
      <Link to="/rh/dashboard" className="hover:text-blue-600">
        Início
      </Link>
      {parts.map((part, index) => {
        const route = "/" + parts.slice(0, index + 1).join("/");
        return (
          <span key={index}>
            {" / "}
            <Link to={route} className="hover:text-blue-600">
              {format(part)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};
