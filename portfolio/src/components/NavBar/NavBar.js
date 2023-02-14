import { useState } from "react";
import "./NavBar.css";
import logo from "../../images/header-logo.png";

function NavBar() {
  const [visibility, setVisibility] = useState(false);
  const navToggle = () => {
    setVisibility(!visibility);
  };

  return (
    <header class="primary-header flex">
      <div>
        <img src={logo} alt="portfolio logo" class="logo" />
      </div>

      <button
        class="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={visibility}
        onClick={navToggle}
      >
        {visibility ? (
          <i class="fa-solid fa-xmark fa-2x"></i>
        ) : (
          <i class="fa-solid fa-bars fa-2x"></i>
        )}
        <span class="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          class="primary-navigation flex"
          data-visible={visibility}
        >
          <li class="active">
            <a>
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li class="active">
            <a>
              <span aria-hidden="true">01</span>About
            </a>
          </li>
          <li class="active">
            <a>
              <span aria-hidden="true">02</span>Work
            </a>
          </li>
          <li class="active">
            <a>
              <span aria-hidden="true">03</span>Blog
            </a>
          </li>
          <li class="active">
            <a>
              <span aria-hidden="true">04</span>Contact
            </a>
          </li>
          <li class="active">
            <a>
              <span aria-hidden="true">05</span>Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
