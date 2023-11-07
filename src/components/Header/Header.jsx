import "./Header.scss";
import logo from "../../assets/img/logo-salmon.png";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img src={logo} alt="Kasa logo" />
          </a>
        </div>
        <div className="navigation">
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </div>
      </nav>

    </header>
  );
}

export default Header;

