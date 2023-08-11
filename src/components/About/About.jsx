import styles from "./About.module.css";
import TarjetaGrilla from "../TarjetaGrilla/TarjetaGrilla";
import { FaHandshake, FaCheck } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const About = () => {
  const tarjetas = [
    {
      titulo: "Visión",
      descripcion:
        "Buscamos ser la empresa líder en la comercialización de productos electrónicos, partiendo de nuestro compromiso con cada cliente, brindándoles las soluciones que están buscando y logrando la excelencia en nuestro servicio, garantizándoles una adecuada atención y calidad asegurada en nuestros productos.",
    },
    {
      titulo: "Misión",
      descripcion:
        "Somos una empresa genuina que busca la consolidación de nuestro prestigio, apuntando a la excelencia en nuestros productos y la confianza en nuestro personal. Brindamos el servicio adecuado para cumplir las expectativas de nuestra clientela y superarlas con éxito. ¿Buscas calidad y seguridad garantizada? ¡Encuentra Misiotrónica!",
    },
    {
      titulo: "Valores",
      descripcion: (
        <ul>
          <li>Confianza, calidad y seguridad son los principios de nuestra empresa</li>
          <li>Creemos que para cumplir las exigencias que nuestra clientela necesita es necesario trabajar con dedicación, integridad y entusiasmo</li>
          <li>Nuestro principal foco la confianza y el bienestar de nuestro cliente estando siempre a su disposición</li>
        </ul>
      ),
    },
  ];
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Somos Misiotrónica</h1>
      <div>
        <TarjetaGrilla tarjetas={tarjetas} />
      </div>
      <div>
        <h2 className={styles.h2style}>¿Por qué comprar en Misiotrónica?</h2>
        <div className={styles.titulos}>
          <div>
            <FaHandshake className={styles.icon} size={50} />
            <h2 className={styles.h2Estilo}>Compromiso</h2>
            <p className={styles.pEstilo}>Calidad</p>
          </div>
          <div>
            <BsFillPeopleFill className={styles.icon} size={50} />
            <h2 className={styles.h2Estilo}>Seriedad</h2>
            <p className={styles.pEstilo}>Garantía de confianza</p>
          </div>
          <div>
            <FaCheck className={styles.icon} size={50} />
            <h2 className={styles.h2Estilo}>Experiencia</h2>
            <p className={styles.pEstilo}>Visión y misión clara</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
