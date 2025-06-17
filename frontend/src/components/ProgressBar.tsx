import React from 'react';

interface ProgressBarProps {
    progress: number; // Progress percentage (0 to 100)
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div style={{ width: '100%', backgroundColor: '#F9FAFB', borderRadius: '5px', overflow: 'hidden' }}>
            <div
                style={{
                    width: `${progress}%`,
                    backgroundColor: '#2563EB',
                    height: '20px',
                    transition: 'width 0.3s ease-in-out',
                }}
            />
        </div>
    );
};

