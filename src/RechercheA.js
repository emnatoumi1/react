import { useState } from 'react';

function RechercheA() {
  const [data, setData] = useState([]);
  const [nom, setNom] = useState('');
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeNom = (event) => {
    setNom(event.target.value);
  };

  const handleChangeVille = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3002/recherchea/${nom}/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setNom('');
        setCity('');
        setData(data);
        setErrorMessage(''); // Clear error message on successful fetch
        console.log(data);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        setErrorMessage('Error during search'); // Set error message in state
      });
  };

  return (
    <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#444', marginBottom: '20px' }}>SEARCH STUDENT </h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" value={nom} onChange={handleChangeNom} placeholder=" Name" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        <input type="text" value={city} onChange={handleChangeVille} placeholder="City" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Search</button>
        <h2>Etudiant</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <ul>
          {data.map((item) => (
            <li key={item.id}> {item.nom} : {item.ville}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default RechercheA;
