import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "@/components/layout/headers";
import { Footer } from "@/components/layout/footer";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { ToastNotification } from "@/components/ui/ToastNotification";
import { FileUpload } from "@/components/FileUpload"; 

import { InputGroup } from "@/components/ui/InputGroup"; // se você já tiver, senão adaptamos rápido

export const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [interest, setInterest] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const confirmSubmit = () => {
    setModalOpen(false);
    // Aqui você pode adicionar integração com backend/API
    console.log({ name, email, phone, cv, interest, coverLetter });

    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
      navigate("/minha-candidatura");
    }, 2500);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-8 text-primary-700">
            Formulário de Candidatura
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <InputGroup
              label="Nome completo"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo"
              required
            />

            <InputGroup
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@dominio.com"
              required
            />

            <InputGroup
              label="Telefone"
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+258 8XX XXX XXX"
              required
            />

            <FileUpload
              label="Upload do CV (PDF ou DOCX)"
              onFileSelect={setCv}
            />

            <InputGroup
              label="Área de Interesse"
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Exemplo: Desenvolvimento Frontend"
              required
            />

            <InputGroup
              label="Carta de Apresentação"
              id="coverLetter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Escreva sua carta de apresentação aqui..."
              textarea
              rows={5}
              required
            />

            <div className="flex justify-center">
              <Button variant="outline" size="lg" type="submit">
                Enviar Candidatura
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Confirmar Envio">
        <p>Tem certeza que deseja enviar sua candidatura?</p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={() => setModalOpen(false)}>
            Cancelar
          </Button>
          <Button variant="default" onClick={confirmSubmit}>
            Confirmar
          </Button>
        </div>
      </Modal>

      {toastVisible && (
        <ToastNotification
          message="Candidatura enviada com sucesso!"
          onClose={() => setToastVisible(false)}
        />
      )}
    </div>
  );
};
