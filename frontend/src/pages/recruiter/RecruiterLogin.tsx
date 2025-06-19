import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RecruiterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock para apresentação (remova em produção!)
    if (email === 'recrutador@empresa.com' && password === '123456') {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('userId', 'mock-user-id'); // simulação para teste

      navigate('/rh/dashboard');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('rh_token', data.token);
        localStorage.setItem('userId', data.userId); // Salva como rh_token
        navigate('/rh/dashboard'); // Redireciona para dashboard RH
      } else {
        setError('Falha no login. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro no sistema. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-black bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: "url('/img/fundo-2.jpg')" }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-50 p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login do Recrutador</h2>

          {error && (
            <div className="mb-4 text-red-600 bg-red-100 border border-red-200 rounded px-3 py-2 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
