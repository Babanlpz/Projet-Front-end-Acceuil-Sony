import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <a href="#" className="logo">
        <img src={Logo} alt="" />
      </a>
      <ul className="navigation">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Produits</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="nav-icons">
        <div className="icon-user">
          <ion-icon name="person"></ion-icon>
        </div>
        <div id="burger-menu">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
