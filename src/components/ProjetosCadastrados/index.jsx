import React from "react";

import projetos from "./projetos.json";

import styles from "./ProjetosCadastrados.module.scss"

function ProjetosCadastrados({ java }) {
  console.log(java);

  return (
    <div className={styles.container}>
      <ul>
        {projetos.map(
          (item) =>
            java ===  item.tags  && (
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
