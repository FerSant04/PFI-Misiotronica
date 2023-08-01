import { useState } from "react";
import Articulos from "../Articulos/Articulos";
import ArticulosCard from "../ArticulosCard/ArticulosCard";
import styles from "./ArticulosGrilla.module.css";

const ArticulosGrilla = () => {
  const [category, setCategory] = useState("");

  const categorias = Array.from(
    new Set(Articulos.map((item) => item.categoria))
  );

  const handleCategory = (categoria) => {
    setCategory(categoria);
  };

  const filtrado = category
    ? Articulos.filter((item) => item.categoria === category)
    : Articulos;
  return (
    <div>
      <div className={styles.articulosGrillaContainer}>
        <div className={styles.botones}>
          <button className={styles.boton} onClick={() => handleCategory("")}>
            Todas las categorías
          </button>
          {categorias.map((categoria) => (
            <button key={categoria} onClick={() => handleCategory(categoria)}>
              {categoria}
            </button>
          ))}
        </div>
      </div>
      <ul className={styles.articulosGrilla}>
        {filtrado.map((art) => (
          <ArticulosCard key={art.id} art={art} />
        ))}
      </ul>
    </div>
  );
};

export default ArticulosGrilla;
