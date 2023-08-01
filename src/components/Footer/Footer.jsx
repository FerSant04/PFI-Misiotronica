import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.row}>
          <p>
            © {new Date().getFullYear()} Misiotrónica. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
