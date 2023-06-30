import Carousel from "components/Carousel";
import React from "react";
import styles from "./Habilidades.module.scss";
import icones from "./icones.json";

function Habilidades() {
  return (
    <>
      <h1 className={styles.titulo}>Habilidades</h1>
      <Carousel>
        <div className={styles.container}>
          <ul>
            {icones.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.imagem} alt={item.titulo}></img>
                </li>
              );
            })}
          </ul>
        </div>
      </Carousel>
    </>
  );
}

export default Habilidades;
