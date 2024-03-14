import { useState } from 'react';

function Supprimer() {
  const [studentId, setStudentId] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3002/etudiants/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setStudentId('');
        setMessage(`L'étudiant avec l'ID ${studentId} a été supprimé avec succès`);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
        setMessage(`Erreur lors de la suppression de l'étudiant avec l'ID ${studentId}`);
      });
  };

  return (
    <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#444', marginBottom: '20px' }}>SUPPRIMER UN ÉTUDIANT PAR ID</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" value={studentId} onChange={handleInputChange} placeholder="ID de l'étudiant à supprimer" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        <button type="button" onClick={handleDelete} style={{ marginTop: '10px', padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}>Supprimer</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Supprimer;
