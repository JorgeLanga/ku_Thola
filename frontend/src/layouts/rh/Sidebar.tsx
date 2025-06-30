import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Briefcase,
  Users,
  FileText,
  Menu,
  LogOut,
  ChevronLeft,
  LucideCalendarClock,
  MessageCircle,
  User,
  BarChart2,
  CalendarClock,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/rh/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { path: '/rh/vagas', label: 'Gerir vagas', icon: <Briefcase size={20} /> },
    { path: '/rh/candidatos', label: 'Candidatos', icon: <Users size={20} /> },
    { path: '/rh/avaliacoes', label: 'Avaliações', icon: <FileText size={20} /> },
    { path: '/rh/historico', label: 'Histórico', icon: <LucideCalendarClock size={20} /> },
    { path: '/rh/entrevistas', label: 'Entrevistas Agendadas', icon: <CalendarClock size={20} /> },
    { path: '/rh/comunicacao', label: 'Mensagens', icon: <MessageCircle size={20} /> },
    { path: '/rh/relatorios', label: 'Relatórios', icon: <BarChart2 size={20} /> },
    { path: '/rh/perfil', label: 'Perfil', icon: <User size={20} /> },
  
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  const renderLinks = () => (
    <ul className="space-y-2 mt-6">
      {navItems.map(({ path, label, icon }) => (
        <li key={path}>
          <Link
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive(path)
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-blue-700 hover:text-white'
            }`}
          >
            {icon}
            {!collapsed && <span>{label}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#1E3A8A] text-white">
        <h2 className="text-xl font-bold">Ku Thola</h2>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          collapsed ? 'w-16' : 'w-64'
        } hidden md:flex flex-col min-h-screen bg-[#1E3A8A] text-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h2 className="text-2xl font-bold">Ku Thola</h2>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-white">
            <ChevronLeft
              className={`transition-transform ${
                collapsed ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
        {renderLinks()}

        {/* Sair */}
        <div className="mt-auto p-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
          >
            <LogOut size={20} />
            {!collapsed && <span>Sair</span>}
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-40">
          <div className="w-64 bg-[#1E3A8A] text-white h-full p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Ku Thola</h2>
              <button onClick={() => setMobileOpen(false)}>
                <ChevronLeft />
              </button>
            </div>
            {renderLinks()}
            <div className="mt-auto p-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
