import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const menuItems = [
  { title: "Ventas", link: "/tienda" },
  { title: "Nuestra Organización", link: "/nosotros" },
  { title: "Inicio", link: "/" },
  { title: "Contacto", link: "/contacto" },
  { title: "No Encontrado", link: "*" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <li className="nav-item" key={index}>
            {item.title === "Inicio" ? (
              <a href={item.link}>
                <img className="logo" src={Logo} alt="Logo" />
              </a>
            ) : (
              <a href={item.link}>{item.title}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
