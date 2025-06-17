import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a CSS file for styling

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to="/manage-jobs">Manage Jobs</Link>
                </li>
                <li>
                    <Link to="/candidates">View Candidates</Link>
                </li>
                <li>
                    <Link to="/evaluations">Evaluations</Link>
                </li>
            </ul>
        </div>
    );
};

