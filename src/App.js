import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, []);

  const printPDF = () => {
    const doc = new jsPDF();
    let y = 10;
    doc.text("Liste des étudiants", 10, y);
    y += 10;
    data.forEach(student => {
      doc.text(`ID: ${student.id}, Nom: ${student.nom}, Ville: ${student.ville}`, 10, y);
      y += 10;
    });
    doc.save("liste_etudiant.pdf");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nom</th>
                <th scope="col">Ville</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nom}</td>
                  <td>{item.ville}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={printPDF}>Imprimer PDF</button>
        </div>
      </div>
    </div>
  );
}

export default App;