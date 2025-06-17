
# 💼 Ku Thola – Sistema de Recrutamento Digital

Hackathon Bytes4Future | Grupo 5

**Ku Thola** é uma solução digital desenvolvida para centralizar, automatizar e otimizar processos de recrutamento de uma organização moçambicana. A aplicação foi desenvolvida durante a Hackathon do programa Bytes4Future e visa tornar os processos seletivos mais eficientes, acessíveis e padronizados.

---

## 📁 Estrutura do Projeto

```
/ (raiz)
├── /backend        # API RESTful com Express + TypeScript + MongoDB
├── /frontend       # Aplicação web com React.js + Tailwind CSS
└── README.md
```

---

## 🚀 Tecnologias Utilizadas

### Backend – Tecnologias

* Node.js
* Express
* TypeScript
* MongoDB + Mongoose
* JSON Web Token (JWT)
* Dotenv

### Frontend – Tecnologias

* React.js
* React Router
* Context API
* Tailwind CSS
* Shadcn UI (Componentes UI)

---

## ⚙️ Como Executar o Projeto

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔧 Funcionalidades do Sistema

### Área do Candidato

* Visualização de vagas disponíveis
* Filtros por área ou tipo de vaga
* Submissão de candidatura com upload de CV
* Feedback pós-candidatura
* Acompanhamento do status da candidatura (Ex: Avaliação, Entrevista, Resultado)

### Área do RH / Recrutadores

* Autenticação com login seguro (JWT)
* Dashboard com listagem de todas as candidaturas
* Filtros por vaga, estado e nome do candidato
* Visualização completa do perfil de cada candidato
* Campos para avaliação técnica e comportamental
* Gestão de vagas (criar, editar, remover)
* Histórico centralizado de candidaturas e avaliações

---

## 🌐 Fluxo de Branches

* `main`: versão principal estável
* `backend`: desenvolvimento da API
* `frontend`: desenvolvimento do frontend React

---

## 🔐 Autenticação

* JWT gerado no login
* Token armazenado no `localStorage`
* Autenticação protegida por middleware
* Header de requisições autenticadas:

```http
Authorization: Bearer <token>
```

---

## 📌 Observações

* O projeto é otimizado para funcionar mesmo com conexões de baixa largura de banda
* O design é responsivo e acessível
