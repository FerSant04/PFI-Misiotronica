import { useState } from "react";
import styles from "./Contacto.module.css";

const Contacto = () => {
  const [name, setForm] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  return (
    <div className={styles.contenedor}>
      <h1>Contacto</h1>
      <div className={styles.formulario}>
        <div className={styles.cuadro}>
          <p>Nombre</p>
          <input
            className={styles.texto}
            onChange={(e) => setForm(e.target.value)}
          />
        </div>
        <div className={styles.box}>
          <p>Teléfono</p>
          <input
            className={styles.texto}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className={styles.container}>
          <p>Correo</p>
          <input
            className={styles.texto}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.caja}>
          <p>Dirección</p>
          <input
            className={styles.texto}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            alert(
              "Nombre: " +
                name +
                "\nSu teléfono es: " +
                tel +
                "\nSu Email es: " +
                email +
                "\nSu dirección es: " +
                adress +
                "\nEstaremos contactandolo pronto!"
            );
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Contacto;
