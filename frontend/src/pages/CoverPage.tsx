import React from 'react';
import './CoverPage.css'; // Assuming you will create a CSS file for styling

const CoverPage: React.FC = () => {
    return (
        <div className="cover-page" style={{ backgroundColor: '#F9FAFB', padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: '#1E3A8A' }}>Ku Thola</h1>
            <h2>Paleta de Cores</h2>
            <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Elemento</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Cor</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Cor Primária</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#1E3A8A', color: '#fff' }}>Azul escuro</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>#1E3A8A</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Cor Secundária</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#60A5FA', color: '#fff' }}>Azul claro</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>#60A5FA</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Fundo</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#F9FAFB' }}>Cinza claro</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>#F9FAFB</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Texto principal</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', color: '#111827' }}>Preto</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>#111827</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Botões / Destaques</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#2563EB', color: '#fff' }}>Azul royal</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>#2563EB</td>
                    </tr>
                </tbody>
            </table>
            <h2>Tipografia</h2>
            <p style={{ color: '#111827' }}>Aqui você pode descrever a tipografia usada no sistema.</p>
            <h2>Descrição do Sistema</h2>
            <p style={{ color: '#111827' }}>Ku Thola é uma plataforma de recrutamento que conecta candidatos a oportunidades de emprego.</p>
        </div>
    );
};

export default CoverPage;