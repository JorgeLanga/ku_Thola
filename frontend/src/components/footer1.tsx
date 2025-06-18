
export const Footer = () => {
  return (
    <footer className="flex w-full bg-gradient-to-r from-cyan-500 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ku Thola. Todos os direitos reservados.</p>
        <div className="mt-2 md:mt-0 space-x-4">
          <a href="#" className="hover:text-[#60A5FA]">Termos</a>
          <a href="#" className="hover:text-[#60A5FA]">Privacidade</a>
          <a href="#" className="hover:text-[#60A5FA]">Contacto</a>
        </div>
      </div>
    </footer>
  );
};
