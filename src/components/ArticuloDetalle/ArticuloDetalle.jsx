import styles from "./ArticuloDetalle.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Articulos from "../Articulos/Articulos";
import NoEncontrado from "../NoEncontrado/NoEncontrado";
import { useState } from "react";

const ArticuloDetalle = () => {
  const [contar, setContar] = useState(1);

  const sumar = () => {
    setContar(contar + 1);
  };

  const restar = () => {
    setContar(contar - 1);
  };

  const navigate = useNavigate();
  const handleChange = (e) => {
    navigate("/tienda");
  };

  const { id } = useParams();
  const imagenId = Articulos.find((articulo) => articulo.id === parseInt(id));

  if (!imagenId) {
    return (
      <div>
        <NoEncontrado />
      </div>
    );
  }

  return (
    <div className={styles.detalles}>
      <div className={styles.boxBoton}>
        <button className={styles.boton} onClick={handleChange}>
          Volver
        </button>
      </div>
      <img
        className={styles.foto}
        src={imagenId.imagen}
        alt={imagenId.nombre}
        width={400}
        height={400}
      ></img>
      <div className={styles.tamaño}>
        <p className={styles.p}>
          <b>Titulo: </b> {imagenId.nombre}
        </p>
        <p className={styles.p}>
          <b>Categoría: </b> {imagenId.categoria}
        </p>
        <p className={styles.p}>
          <b>Descripción: </b>
          {imagenId.desc}
        </p>
        <p className={styles.p}>
          <b>Precio: $</b>
          {imagenId.precio}
        </p>
        <div className={styles.boxBuy}>
          <button
            className={styles.buy}
            onClick={() => {
              alert(
                "La cantidad de productos que quieres es: " +
                  contar +
                  "\nSu valor total es: $" +
                  imagenId.precio * contar
              );
            }}
          >
            Comprar ahora
          </button>
        </div>
        <div className={styles.cajaGrande}>
          <div className={styles.boxCart}>
            <button className={styles.cart} onClick={sumar}>
              +
            </button>
          </div>
          <span className={styles.cont}>{contar}</span>
          <div className={styles.boxCart}>
            <button
              disabled={contar <= 1}
              className={styles.cart}
              onClick={restar}
            >
              -
            </button>
          </div>
        </div>
        <div className={styles.boxBuy}>
          <button
            className={styles.buy}
            onClick={() => {
              setContar(1);
            }}
          >
            Reiniciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticuloDetalle;
