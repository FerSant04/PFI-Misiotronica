import styles from "./Buscar.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buscar = () => {
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/tienda/" + texto);
  };

  return (
    <form className={styles.contenedor} onSubmit={handleSubmit}>
      <div className={styles.buscador}>
        <input
          onChange={(e) => setTexto(e.target.value)}
          value={texto}
          className={styles.texto}
          type="text"
          placeholder="Ingrese la ID del producto"
        />
        <button className={styles.boton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Buscar;
