import "../../assets/styles/App.scss";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    // TODO implement A propos page and router
    <div className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;
