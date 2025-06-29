import { NavLink } from "react-router-dom";
import { LogOut, Home, Bell, User, Briefcase,ClipboardList,CalendarClock, } from "lucide-react";

export const CandidateSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">KU THOLA</h2>

      <nav className="space-y-4">
        <NavLink to="/candidato/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Home size={18} /> Dashboard
        </NavLink>
        <NavLink to="vagas" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Briefcase size={18} /> Vagas
        </NavLink>
        <NavLink to="/candidato/perfil" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <User size={18} /> Perfil
        </NavLink>
       

{/* Seção adicional */}
        <div className="mt-6 border-t pt-4 space-y-4">
          <NavLink to="/candidato/minhas-candidaturas" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <ClipboardList size={18} /> Minha Candidaturas
          </NavLink>
          <NavLink to="/candidato/entrevistas" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <CalendarClock size={18} /> Minhas Entrevistas
          </NavLink>
           <NavLink to="/candidato/notificacoes" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
          <Bell size={18} /> Notificações
        </NavLink>
        </div>


        <button
          onClick={() => {
            localStorage.removeItem("token_candidato");
            window.location.href = "/login";
          }}
          className="flex items-center gap-3 text-red-500 hover:text-red-700 mt-10"
        >
          <LogOut size={18} /> Sair
        </button>
      </nav>
    </aside>
  );
};
