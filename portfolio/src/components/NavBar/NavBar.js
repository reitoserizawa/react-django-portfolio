import { useState } from "react";
import "./NavBar.css";
import logo from "../../images/header-logo.png";

function NavBar() {
  const [visibility, setVisibility] = useState(false);
  const navToggle = () => {
    setVisibility(!visibility);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="portfolio logo" className="logo" />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={visibility}
        onClick={navToggle}
      >
        {visibility ? (
          <i className="fa-solid fa-xmark fa-2x"></i>
        ) : (
          <i className="fa-solid fa-bars fa-2x"></i>
        )}
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation flex"
          data-visible={visibility}
        >
          <li className="active">
            <a href="#home">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li className="active">
            <a href="#about">
              <span aria-hidden="true">01</span>About
            </a>
          </li>
          <li className="active">
            <a href="#work">
              <span aria-hidden="true">02</span>Work
            </a>
          </li>
          <li className="active">
            <a href="#blog">
              <span aria-hidden="true">03</span>Blog
            </a>
          </li>
          <li className="active">
            <a href="#contact">
              <span aria-hidden="true">04</span>Contact
            </a>
          </li>
          <li className="active">
            <a href="#resume">
              <span aria-hidden="true">05</span>Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
