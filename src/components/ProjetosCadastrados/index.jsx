import PaginaProjetos from "pages/PaginaProjetos";
import React from "react";

import projetos from "./projetos.json";

import styles from "./ProjetosCadastrados.module.scss"

function ProjetosCadastrados({ categoria }) {
  console.log(categoria);

  return (
    <div className={styles.container}>
      <ul>
        {projetos.map(
          (item) =>
            categoria ===  item.categoria  && (
              <div>

                  <p>Funcionou</p>

              </div>
    
            )
        )}
      </ul>
    </div>
  );
}

export default ProjetosCadastrados;
