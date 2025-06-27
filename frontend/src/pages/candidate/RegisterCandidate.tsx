import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/headers';
import { Footer } from '@/components/layout/footer';

export const RegisterCandidate = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Por favor, insira seu nome completo.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setLoading(true);

    try {
      // Simulação de chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulação de sucesso, redireciona para login
      navigate('/login-candidato');
    } catch {
      setError('Erro ao tentar registrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-primary-700">Registrar Candidato</h1>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 mb-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-describedby="name-error"
            />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="mt-1 mb-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-describedby="email-error"
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="mt-1 mb-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-describedby="password-error"
            />

            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="mt-1 mb-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-describedby="confirmPassword-error"
            />

            {error && (
              <p className="mb-4 text-red-600 font-medium" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" disabled={loading} aria-busy={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Já tem conta?{' '}
            <Link
              to="/login-candidato"
              className="text-primary-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Faça login
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
