import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
   { path: '/rh/vagas', label: 'Gerir Vagas' },
  { path: '/rh/candidatos', label: 'Candidatos' },  // Crie essa rota se ainda não existir, ou ajuste para uma página de listagem
  { path: '/rh/avaliacoes', label: 'Avaliações' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#1E3A8A] text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Ku Thola</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-[#2563EB] font-semibold'
                  : 'hover:bg-[#2563EB]/70'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
