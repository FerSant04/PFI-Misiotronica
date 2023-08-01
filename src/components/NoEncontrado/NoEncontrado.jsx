import { ImSad } from "react-icons/im";
import styles from "./NoEncontrado.module.css";

const NoEncontrado = () => {
  return (
    <div>
      <div className={styles.face}>
        <ImSad size={200} />
      </div>
      <div className={styles.textos}>
        <h1 className={styles.titulo}>404</h1>
        <h3 className={styles.sub}>Página no encontrada</h3>
        <p className={styles.parrafo}>
          La página que estás buscando no existe u ocurrió un error inesperado.{" "}
          <br /> Vuelve a la página principal o comunicacate con el dueño de la
          página.
        </p>
      </div>
    </div>
  );
};

export default NoEncontrado;
