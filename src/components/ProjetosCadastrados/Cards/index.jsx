import Carousel from "components/Carousel";
import React from "react";



function Cards({key, imagem}) {
  return (

        <div>
          <ul>

            <li>
              <img src={imagem} alt="" />
            </li>
          </ul>
        </div>

    

  );
}

export default Cards;


/* 
import React from "react";

import projetos from "./projetos.json";

function Cards() {
  return (
    <div className={styles.container}>
      <ul>
        {projetos.map(
          (item) =>
            categoria === item.categoria && (
              <div key={item.id}>
                <img src={item.imagem} onClick={abrirModal} />
              </div>
            )
        )}
      </ul>
    </div>
  );
}

export default Cards;

*/