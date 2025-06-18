
<<<<<<< HEAD
const Header: React.FC = () => {
    return (
        <header className="p-6 bg-gradient-to-r from-cyan-500 shadow-md flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-white tracking-wide mb-2 sm:mb-0">Ku-THOLA</h1>
            <nav>
                <a
                    href="/ver-vagas"
                    className="text-white hover:text-indigo-200 font-medium mr-6 transition-colors duration-200"
                >
                    Ver Vagas
                </a>
                <a
                    href="/criar-vagas"
                    className="text-white hover:text-indigo-200 font-medium transition-colors duration-200"
                >
                    Criar Vagas
                </a>
            </nav>
        </header>
      
    );
=======
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#1E3A8A] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ku Thola</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-[#60A5FA] transition-colors">Início</Link>
          <Link to="/jobs" className="hover:text-[#60A5FA] transition-colors">Vagas</Link>
          <Link to="/login" className="hover:text-[#60A5FA] transition-colors">Login RH</Link>
        </nav>
      </div>
    </header>
  );
>>>>>>> cd31208abecf9b88ad69574051d28e25945665c9
};
