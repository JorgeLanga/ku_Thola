import { useState } from "react";

export function SaveJobButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => setSaved(!saved)}
      className={`px-4 py-2 rounded border text-sm font-medium transition ${
        saved ? "bg-green-100 text-green-600 border-green-400" : "bg-white text-blue-600 border-blue-400"
      }`}
    >
      {saved ? "Vaga Salva" : "Salvar Vaga"}
    </button>
  );
}