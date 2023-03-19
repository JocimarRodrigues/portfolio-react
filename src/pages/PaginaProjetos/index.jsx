import Carousel from "components/Carousel";
import React, { useState } from "react";
import styles from "./Projetos.module.scss";

import Modal from "components/Modal";
import ProjetosCadastrados from "components/ProjetosCadastrados";


function PaginaProjetos({descricao, id, imagem}) {

  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  }

  const fecharModal = () => {
    setMostrarModal(false);
  }


  return (
    <section className={styles.container}>
      <ProjetosCadastrados categoria="JavaScript"/>
      <ProjetosCadastrados categoria="React"/>
      <h1>Javascript</h1>
      <div>
        {descricao}
      </div>
      <Carousel>

        <ProjetosCadastrados categoria="JavaScript"/>


      </Carousel>
      <h1>React</h1>
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
    </section>
  );
}

export default PaginaProjetos;


/* 
import Carousel from "components/Carousel";
import React, { useState } from "react";
import styles from "./Projetos.module.scss";
import projetos from "./projetos.json";
import Modal from "components/Modal";

function PaginaProjetos() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  }

  const fecharModal = () => {
    setMostrarModal(false);
  }

  return (
    <section className={styles.container}>
      <h1>Javascript</h1>
      <Carousel>
        <div className={styles.lista}>
          <ul>
            {projetos.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.imagem} 
                  onClick={abrirModal}/>
                  <Modal descricao={item.descricao}
                  mostrarModal={mostrarModal}
                  fecharModal={fecharModal}
                  />
                </li>
              )
            })}
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
      <h1>React</h1>
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
    </section>
  );
}

export default PaginaProjetos;


*/


/* 
            {projetos.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.imagem} 
                  onClick={abrirModal}/>

                  <Modal descricao={item.descricao}
                  mostrarModal={mostrarModal}
                  fecharModal={fecharModal}
                  />
                </li>
              )
            })}

*/