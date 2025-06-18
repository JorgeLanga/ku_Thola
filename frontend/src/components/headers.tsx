import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <header className="bg-gradient-to-r from-cyan-500 to-cyan-900 text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
=======
    <header className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white text-white shadow">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
>>>>>>> 658406b6ec3537ac5ce919c5d2e39cd1d17af22d
        {/* Logotipo */}
        <Link to="/home" className="flex items-center gap-2 hover:opacity-90 transition">
          <img
            src="/ku-thola_logo.svg"
            alt="ku_Thola Logo"
            className="h-15 w-auto"
          />
        </Link>
        {/* Navegação */}
        <ul className="flex gap-4 md:gap-8 items-center text-sm md:text-base">
          <li>
            <Link
              to="/home"
              className={`hover:underline hover:text-gray-200 transition ${
                location.pathname === "/home" ? "underline font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/vagas"
              className={`hover:underline hover:text-gray-200 transition ${
                location.pathname.startsWith("/vagas") ? "underline font-semibold" : ""
              }`}
            >
              Vagas
            </Link>
          </li>
          <li>
            <Link
              to="/minha-candidatura"
              className={`hover:underline hover:text-gray-200 transition ${
                location.pathname === "/minha-candidatura" ? "underline font-semibold" : ""
              }`}
            >
              Minha Candidatura
            </Link>
          </li>
          <li>
            <Link
              to="/rh/login"
              className={`hover:underline hover:text-gray-200 transition ${
                location.pathname === "/rh/login" ? "underline font-semibold" : ""
              }`}
            >
              Área do Recrutador
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
