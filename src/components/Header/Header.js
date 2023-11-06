import "./Header.scss";
import logo from "../../img/logo-salmon.png";

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
          <a href="#">
            <p>Accueil</p>
          </a>
          <a href="#">
            <p>À propos</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
