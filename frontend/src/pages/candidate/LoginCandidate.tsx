import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/headers';
import { Footer } from '@/components/layout/footer';

export const LoginCandidate = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    // Regex simples para validação básica de email
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }
    if (!password) {
      setError('Por favor, insira sua senha.');
      return;
    }

    setLoading(true);

    // Simular requisição de login (substituir pela real API)
    try {
      await new Promise((res) => setTimeout(res, 1500)); // simula delay

      // Simulação de login válido
      if (email === 'candidato@exemplo.com' && password === '123456') {
        // Aqui você deve salvar token/session no contexto ou localStorage
        navigate('/dashboard-candidato'); // redireciona para dashboard
      } else {
        setError('Email ou senha incorretos.');
      }
    } catch {
      setError('Erro ao tentar fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-primary-700">Login do Candidato</h1>

          <form onSubmit={handleSubmit} noValidate>
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
              autoComplete="current-password"
              className="mt-1 mb-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-describedby="password-error"
            />

            {error && (
              <p
                id="email-error"
                className="mb-4 text-red-600 font-medium"
                role="alert"
              >
                {error}
              </p>
            )}

            <Button type="submit" disabled={loading} aria-busy={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem conta?{' '}
            <Link
              to="/registro-candidato"
              className="text-primary-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
