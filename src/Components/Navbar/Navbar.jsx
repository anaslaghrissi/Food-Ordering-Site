import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const showMenu = document.getElementById("show-menu");
    const openMenuButton = document.getElementById("open-menu");
    const crossMenuButton = document.getElementById("cross-menu");

    const toggleMenu = () => {
      showMenu.classList.toggle("showmenu");
    };

    if (openMenuButton) {
      openMenuButton.addEventListener("click", toggleMenu);
    }
    if (crossMenuButton) {
      crossMenuButton.addEventListener("click", toggleMenu);
    }

    return () => {
      if (openMenuButton) {
        openMenuButton.removeEventListener("click", toggleMenu);
      }
      if (crossMenuButton) {
        crossMenuButton.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="Logo" />
      <ul className="navbar-menu" id="show-menu">
        <img
          src={assets.cross_menu}
          className="cross-menu"
          id="cross-menu"
          alt="Close Menu"
        />
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="right-icon" alt="Search" />
        <div className="navbar-cart-icon">
          <img src={assets.basket_icon} className="right-icon" alt="Basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
        <img
          src={assets.open_menu}
          className="right-icon"
          id="open-menu"
          alt="Open Menu"
        />
      </div>
    </div>
  );
};

export default Navbar;
