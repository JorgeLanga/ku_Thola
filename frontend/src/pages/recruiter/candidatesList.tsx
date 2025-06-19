// Atualizando a lista de candidatos para incluir o título da vaga desejada
// e conectando as entidades entre si

import React from "react";
import { useJobs } from '@/context/jobsContext';

interface Candidate {
  name: string;
  phones: string;
  email: string;
  jobTitle: string; // nome da vaga escolhida
}

const mockCandidates: Candidate[] = [
  { name: "Albertina Dlambe", phones: "871522004 / 850221504", email: "dlambealbertina@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Almório Adolfo Chaguala", phones: "844138349/871038349", email: "almorioadolfo01@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Graça Boaventura Bila", phones: "858768416", email: "gracabilla002@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Jorge Bernardo Langa", phones: "873559810", email: "jorgebernardolanga@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Neyla Feliza Américo Chavane", phones: "847943500", email: "neylachavane0@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Olga Bernece Pinto Macamo", phones: "860708738 / 847864648", email: "olgabernecepintomacamo@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Esperança António Munlela", phones: "849006228 / 867342015", email: "esperancamunlela@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Dulce da Isabel Octávio Chidembue", phones: "845257902", email: "dulcechidembue@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Isa Neide Sitoe", phones: "821819298 / 874444370", email: "issitoe941@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Meque Rodrigues Chiziane", phones: "870580429 / 879977913", email: "mequerodrigueschiziane@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Luís Isaura Vilanculos", phones: "867372562 / 83491127", email: "luisisauravilanculos@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Chilzia Macamo", phones: "875984150", email: "chilziamacamo011@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Gabriel Alfredo Cuna", phones: "844063058/ 828361662", email: "gabrielalfredocuna9@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Maria Genia Abilio Moiane", phones: "860453111/878228436", email: "meriageniaabilio@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Maud Ana Nelson Uate", phones: "843731757/872057332", email: "maudana2000@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "José Nonó Coutinho Mataca", phones: "844919466/860088190", email: "jnc.mataca@gmaIl.com", jobTitle: "Analista de Marketing" },
  { name: "Emílio Sumbane", phones: "86 494 9936 / 83 364 9925", email: "emilio.sumbane@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Angel Sérgio Comé", phones: "863540052", email: "Sergioangel947@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Moises Ngovene", phones: "876607576", email: "ngovenemoises2@gmail.com", jobTitle: "Desenvolvedor Frontend" },
  { name: "Afonso Relane", phones: "822943345 / 870943345", email: "afonso.relane@gmail.com", jobTitle: "Analista de Marketing" },
  { name: "Domingos A. Timane Jr", phones: "820885159/855735760", email: "domingosalfredotimane@gmail.com", jobTitle: "Desenvolvedor Frontend" },
];

export const CandidatesList = () => {
  useJobs();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Candidatos</h1>
      <div className="bg-white shadow rounded-md overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Contacto</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Vaga</th>
            </tr>
          </thead>
          <tbody>
            {mockCandidates.map((candidate, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">{candidate.name}</td>
                <td className="px-4 py-2 text-gray-600">{candidate.phones}</td>
                <td className="px-4 py-2 text-blue-600 underline">{candidate.email}</td>
                <td className="px-4 py-2 text-gray-800">{candidate.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

