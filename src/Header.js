import { Link } from "react-router-dom";

function Header() {

    return (
        <nav>
      <Link to="/">Afficher</Link>
      <Link to="/ajouter">Ajouter</Link>
      <Link to="/modifier">Modifier</Link>
      <Link to="/supprimer">upprimer</Link>
      <Link to="/rechercher">Rechercher</Link>
    </nav>
    )
}
export default Header;