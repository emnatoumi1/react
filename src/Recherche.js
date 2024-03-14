import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
function Recherche() {
    const [data, setData] = useState(''); 
    const {id} = useParams();
    useEffect(() => {
      fetch(`http://localhost:3002/Etudiants/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
      }, []); 
     console.log(data);
     
     if ( data == '') {
        return <h1>il n'ya pas d'etudiant</h1>
      }
    return (
      <div className="App">
       <ul>
      
          <li>{data.nom}</li>
  
       </ul>
      </div>
    );
  }

export default Recherche