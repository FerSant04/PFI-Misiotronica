import { Link } from "react-router-dom";
import styles from "./ArticulosCard.module.css";
import { useState } from "react";

const ArticulosCard = ({ art }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOn = () => {
    setHover(true);
  };

  const handleMouseOff = () => {
    setHover(false);
  };

  return (
    <li className={styles.articuloCard}>
      <Link className={styles.link} to={"/tienda/" + art.id}>
        <div>
          <img
            className={`${styles.articuloImagen} ${
              hover ? styles.hovered : ""
            }`}
            onMouseEnter={handleMouseOn}
            onMouseLeave={handleMouseOff}
            width={200}
            height={200}
            src={art.imagen}
            alt={art.nombre}
          />
        </div>
        <div className={styles.titulo}>{art.nombre}</div>
        <div className={styles.titulo}>${art.precio}</div>
      </Link>
    </li>
  );
};

export default ArticulosCard;
