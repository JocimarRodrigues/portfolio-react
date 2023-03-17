import Carousel from "components/Carousel";
import React from "react";
import styles from "./Habilidades.module.scss";
import icones from "./icones.json";

function Habilidades() {
  return (
    <Carousel>
      <h1>Tecnologias que tive contato</h1>
    <div className={styles.container}>
       
      <ul>
          {icones.map((item) => {
            return (
              
              <li key={item.id}>
                
                <img src={item.imagem}></img>
                
              </li>
              
            );
          })}
      </ul>
       
    </div>
    </Carousel>
  );
}

export default Habilidades;
