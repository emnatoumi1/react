import { useState } from "react"

function Modifier() {
    const [id,setId]= useState('')
    const [nom,setNom] = useState('')
    const [data,setData] = useState([])

    const handleIdChange = (e) => {
        setId(e.target.value)
    }

    const handleNomChange = (e) => {
        setNom(e.target.value)
    }

    
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3002/etudiants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom: nom }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la modification du nom');
        }
        return response.text();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Erreur:", error);
      });
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Saisir ID de l'étudiant a changer:<input value={id} onChange={handleIdChange} />
                Saisir le nouveau nom de l'étudiant : <input value={nom} onChange={handleNomChange} />
                <button type="submit">Modifier Nom</button>
            </form>
        </div>
    )
}

export default Modifier;