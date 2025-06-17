import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from '../components/Button';

export const FinalFeedback = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // 'approved' or 'rejected'
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to send feedback to the candidate (e.g., API call)
        console.log('Feedback sent:', { message, status });
        navigate('/recruiter-dashboard'); // Redirect after submission
    };

    return (
        <div className="final-feedback">
            <h1>Enviar Feedback Final</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Mensagem Final:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Status:
                        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="approved">Aprovado</option>
                            <option value="rejected">Não Selecionado</option>
                        </select>
                    </label>
                </div>
                <Button text="Enviar Feedback" onClick={function (): void {
                    throw new Error('Function not implemented.');
                } } />
            </form>
        </div>
    );
};
