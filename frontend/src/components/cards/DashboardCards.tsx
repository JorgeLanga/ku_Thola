export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Minhas Candidaturas</h3>
        <p className="text-blue-600 text-2xl">3</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Entrevistas Marcadas</h3>
        <p className="text-blue-600 text-2xl">1</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Notificações</h3>
        <p className="text-blue-600 text-2xl">5</p>
      </div>
    </div>
  );
}
