import React from 'react';
import { Link } from 'react-router-dom';
import  Footer from "../components/footer"
import Header  from "../components/header"

 export const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <header className="home-header">
                <h1>Ku Thola</h1>
                <nav>
                    <Link to="/jobs" className="nav-link">Ver Vagas Disponíveis</Link>
                    <Link to="/recruiter-login" className="nav-link">Sou Recrutador</Link>
                </nav>
            </header>
            <div className="hero-banner">
                <h2>Encontre a sua próxima oportunidade de trabalho!</h2>
            </div>
            <div className="home-buttons">
                <Link to="/jobs" className="button">Ver Vagas Disponíveis</Link>
                <Link to="/recruiter-login" className="button">Sou Recrutador</Link>
            </div>
            <Footer />
        </div>
    );
};


