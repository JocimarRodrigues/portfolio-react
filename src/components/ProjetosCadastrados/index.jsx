import Modal from "components/Modal";
import React, { useState } from "react";



import styles from "./ProjetosCadastrados.module.scss"

function ProjetosCadastrados({ id, imagem, descricao, categoria, linkGitHub, linkDeploy, titulo, tags }) {

  const [mostrarModal, setMostrarModal] = useState(false);


  const abrirModal = () => {
    setMostrarModal(true);
  }

  const fecharModal = () => {
    setMostrarModal(false);
  }


  return (
    <>
    <div className={styles.container}>

        <li >
          <img src={imagem} alt={descricao} key={id} onClick={abrirModal}/>
        </li>

    </div>
    <div>
      <Modal 
      mostrarModal={mostrarModal}
      fecharModal={fecharModal}
      titulo={titulo}
      id={id}
      descricao={descricao}
      imagem={imagem}
      categoria={categoria}
      tags={tags}
      linkGitHub={linkGitHub}
      linkDeploy={linkDeploy}
      />
    </div>
    </>

  );
}

export default ProjetosCadastrados;
