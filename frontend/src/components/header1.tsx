import { Link } from "react-router";


export const Header = () => {
  return (
<header className="bg-blue-900 text-white ...">
  <h1 className="text-2xl font-bold">Ku Thola</h1>
  <nav className="space-x-4">
    <Link to="/jobs" className="hover:underline">
      Ver Vagas Disponíveis
    </Link>
    <Link to="/recruiter-login" className="hover:underline">
      Sou Recrutador
    </Link>
  </nav>
</header>
  )
}

