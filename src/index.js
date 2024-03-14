import React from 'react';
import jsPDF from 'jspdf';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recherche from './Recherche';
import Form from './Form';
import RechercheA from './RechercheA';
import Supprimer from './Supprimer';
import Modifier from './Modifier';
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
  <Header />
    <Routes>
      <Route path="" element={<App />} />
      <Route path="/recherche/:id" element={<Recherche />} />
      <Route path="/rechercheA" element={<RechercheA />} />
      <Route path="/form" element={<Form />} />
      <Route path="/modifier" element={<Modifier />} />
      <Route path="/Supprimer" element={<Supprimer />} />

    </Routes>
  </Router>
);
