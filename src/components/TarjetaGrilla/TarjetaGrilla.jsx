import Tarjeta from "../Tarjeta/Tarjeta";
import styles from "./TarjetaGrilla.module.css";

const TarjetaGrilla = ({ tarjetas }) => {
  return (
    <div className={styles.TarjetaGrilla}>
      {tarjetas.map((tarjeta, index) => (
        <Tarjeta
          key={index}
          titulo={tarjeta.titulo}
          descripcion={tarjeta.descripcion}
        />
      ))}
    </div>
  );
};

export default TarjetaGrilla;
