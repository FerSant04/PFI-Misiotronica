import Logo from "../../assets/logo.png";
import styles from "./Principal.module.css";
import { BsUsbDrive, BsMotherboard, BsCpu } from "react-icons/bs";
import { GiBatteryPackAlt } from "react-icons/gi";
import { FaRaspberryPi } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.contenido}>
      <div className={styles.box}>
        <img className={styles.logo} src={Logo} alt=""></img>
      </div>
      <h1 className={styles.h1Estilo}>25 AÑOS DE EXPERIENCIA</h1>
      <h2 className={styles.h2Estilo}>
        Gran surtido de productos al mejor precio
      </h2>
      <p className={styles.pEstilo}>
        Somos una empresa con una visión y misión clara, con 25
        <br /> años de desarrollo ininterrumpidos, seguimos creciendo <br />
        sólidamente, buscando ser una opción para la sociedad por <br /> calidad
        de servicio y fuente de trabajo permanente.
      </p>
      <h3 className={styles.h3Estilo}>Nos especializamos en:</h3>
      <div>
        <ul className={styles.icons}>
          <BsUsbDrive className={styles.usb} size={60} />
          <BsMotherboard className={styles.mother} size={60} />
          <GiBatteryPackAlt className={styles.battery} size={60} />
          <BsCpu size={60} className={styles.cpu} />
          <FaRaspberryPi size={60} className={styles.rasp} />
        </ul>
      </div>
      <div className={styles.titulos}>
        <div className={styles.tituloItem}>
          <h2 className={styles.h2Estilo}>+25</h2>
          <p className={styles.pEstilo}>Años de experiencia</p>
        </div>
        <div className={styles.tituloItem}>
          <h2 className={styles.h2Estilo}>+2000</h2>
          <p className={styles.pEstilo}>Ventas realizadas</p>
        </div>
        <div className={styles.tituloItem}>
          <h2 className={styles.h2Estilo}>+60000</h2>
          <p className={styles.pEstilo}>Productos en Stock</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
