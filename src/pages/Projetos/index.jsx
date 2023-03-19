import Carousel from "components/Carousel";
import React from "react";
import styles from "./Projetos.module.scss";

function Projetos() {
  return (
    <section className={styles.container}>
      Projetos
      <h1>Projetos em Javascript</h1>
      <Carousel>
        <div className={styles.lista}>
          <ul>
            <li>
              <img src="/imagens/fujiwara.png" alt="" />
            </li>
            <li>
              <img src="/imagens/ania.jpg" alt="" />
            </li>
            <li>
              <img src="/imagens/megumin2.png" alt="" />
            </li>
          </ul>
        </div>
      </Carousel>
      <section>
        <div>
          <h1>Projetos em React</h1>
          <Carousel>
            <li>
              <img src="/imagens/megumin2.png" alt="" />
              <img src="/imagens/ania.jpg" alt="" />
            </li>
          </Carousel>
        </div>
      </section>
    </section>
  );
}

export default Projetos;
