import { useState, useEffect } from 'react';

function Pays() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, []);

  return (
    <div className="App">
      <h1>le nbrs de pays est : {data.length}</h1>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Code</th>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.cca2}>
              <td>
                <img
                  src={item.flags.png}
                  alt={item.name.common}
                  style={{ width: '50px', height: 'auto' }}
                />
              </td>
              <td style={{ textAlign: 'center' }}>{item.name.common}</td>
              <td>{item.cca2}</td>
              <td style={{ textAlign: 'center' }}>{item.capital}</td>
              <td>{item.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pays;