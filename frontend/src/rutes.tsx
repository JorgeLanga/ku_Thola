import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  {Home,} from "./pages/home"
import { ApplicationForm } from "./pages/ApplicationForm"
import {CandidateEvaluation} from "./pages/CandidateEvaluation"







const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/applicationForm" element={< ApplicationForm/>} />
            <Route path="/candidateEvaluation" element={< CandidateEvaluation/>} />
        </Routes>
    </Router>
);

export default AppRoutes;