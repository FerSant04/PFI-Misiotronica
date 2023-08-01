import ArticulosGrilla from "../ArticulosGrilla/ArticulosGrilla";
import Buscar from "../Buscar/Buscar";
import styles from "./Ventas.module.css";

const Ventas = () => {
  return (
    <div className="ventas">
      <h1 className={styles.titulo}>Sección de Ventas</h1>
      <Buscar />
      <ArticulosGrilla />
      <div>
      </div>
    </div>
  );
};

export default Ventas;
