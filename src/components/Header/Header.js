import "./Header.scss";
import logo from "../../assets/img/logo-salmon.png";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <div>
          {/* TODO replace with the navigation links */}
          <a href="#">
            <img src={logo} alt="Kasa logo" />
          </a>
        </div>
        <div className="navigation">
        </div>
        {/* TODO make this work  */}
        {/* <Link to="/home">Accueil</Link>
        <Link to="/about">À propos</Link> */}
      </nav>
    </header>
  );
}

export default Header;
