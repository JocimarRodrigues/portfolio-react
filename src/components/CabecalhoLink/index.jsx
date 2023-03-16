import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.scss";

function CabecalhoLink({ url, children }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}

export default CabecalhoLink;
