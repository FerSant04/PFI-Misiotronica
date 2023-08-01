import React, { useState } from "react";
import styles from "../Tarjeta/Tarjeta.module.css";

const Tarjeta = ({ titulo, descripcion }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cuadroStyle = {
    backgroundColor: isHovered ? "rgb(113, 129, 145)" : "",
    transition: 'width 0.3s ease, background-color 0.3s ease',
  }

  return (
    <div className={styles.Tarjeta} style={cuadroStyle}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <h1 className={styles.title}>{titulo}</h1>
        <p className={styles.desc}>{descripcion}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
