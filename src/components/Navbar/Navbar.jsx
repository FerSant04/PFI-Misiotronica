import React, { useState } from "react";
import "./Navbar.css";

const menuItems = [
  { title: "Inicio", link: "/" },
  { title: "Ventas", link: "/tienda" },
  { title: "Nuestra Organización", link: "/nosotros" },
  { title: "Contacto", link: "/contacto" },
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
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
