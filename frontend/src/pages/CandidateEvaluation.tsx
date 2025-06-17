import React, { useState } from 'react';

export const CandidateEvaluation = () => {
    const [technicalEvaluation, setTechnicalEvaluation] = useState('');
    const [behavioralEvaluation, setBehavioralEvaluation] = useState('');
    const [generalNotes, setGeneralNotes] = useState('');
    const [status, setStatus] = useState('Aprovado');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Logic to save the evaluation data
        console.log({
            technicalEvaluation,
            behavioralEvaluation,
            generalNotes,
            status,
        });
    };

    return (
        <div className="candidate-evaluation">
            <h1>Avaliação do Candidato</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Técnica:</label>
                    <textarea
                        value={technicalEvaluation}
                        onChange={(e) => setTechnicalEvaluation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Comportamental:</label>
                    <textarea
                        value={behavioralEvaluation}
                        onChange={(e) => setBehavioralEvaluation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Notas Gerais:</label>
                    <textarea
                        value={generalNotes}
                        onChange={(e) => setGeneralNotes(e.target.value)}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Não selecionado">Não selecionado</option>
                    </select>
                </div>
                <button type="submit">Salvar Avaliação</button>
            </form>
        </div>
    );
};
