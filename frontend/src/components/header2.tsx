
import { Link } from "react-router-dom";

export const Header2 = () => {
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
};
