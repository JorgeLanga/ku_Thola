import React from 'react';

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
};

export default Header;