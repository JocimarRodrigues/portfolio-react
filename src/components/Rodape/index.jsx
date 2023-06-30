import React from "react";
import styles from "./Rodape.module.scss";

function Rodape() {
  return (
    <div className={styles.container}>
      <p>
        Desenvolvido por <b>&copy; Jocimar</b>
      </p>
      <ul>
        <li>
          <a href="https://github.com/JocimarRodrigues">
            <img src="/assets/Imagens/Icones/github.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jocimar-rodrigues-chagas/">
            <img src="/assets/Imagens/Icones/li.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Rodape;
