import React, { useState } from "react";
import { InputGroup } from "@/components/ui/InputGroup";
import { Button } from "@/components/ui/Button";

type EvaluationData = {
  technical: string;
  communication: string;
  culture: string;
  comments: string;
};

export const EvaluationForm = ({ onSubmit }: { onSubmit: (data: EvaluationData) => void }) => {
  const [technical, setTechnical] = useState("");
  const [communication, setCommunication] = useState("");
  const [culture, setCulture] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      technical === "" ||
      communication === "" ||
      culture === ""
    ) {
      return;
    }
    onSubmit({
      technical,
      communication,
      culture,
      comments,
    });
    setTechnical("");
    setCommunication("");
    setCulture("");
    setComments("");
  };

  // Garante que só valores entre 0 e 10 sejam aceitos
  const handleNumberChange = (setter: (v: string) => void) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (
      value === "" ||
      (/^\d{1,2}$/.test(value) && Number(value) >= 0 && Number(value) <= 10)
    ) {
      setter(value);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputGroup
        label="Habilidades Técnicas (0 a 10)"
        id="technical"
        type="number"
        min={0}
        max={10}
        required
        value={technical}
        onChange={handleNumberChange(setTechnical)}
      />
      <InputGroup
        label="Comunicação (0 a 10)"
        id="communication"
        type="number"
        min={0}
        max={10}
        required
        value={communication}
        onChange={handleNumberChange(setCommunication)}
      />
      <InputGroup
        label="Aptidão Cultural (0 a 10)"
        id="culture"
        type="number"
        min={0}
        max={10}
        required
        value={culture}
        onChange={handleNumberChange(setCulture)}
      />
      <InputGroup
        label="Comentários Adicionais"
        id="comments"
        textarea
        rows={4}
        value={comments}
        onChange={e => setComments(e.target.value)}
      />

      <div className="flex justify-end">
        <Button type="submit" disabled={technical === "" || communication === "" || culture === ""}>
          Salvar Avaliação
        </Button>
      </div>
    </form>
  );
};
