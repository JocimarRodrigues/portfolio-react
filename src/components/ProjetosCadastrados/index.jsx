import Modal from "components/Modal";
import React, { useState } from "react";

import projetos from "./projetos.json";

import styles from "./ProjetosCadastrados.module.scss"

function ProjetosCadastrados({ id, imagem, descricao, tags, linkGitHub, linkDeploy }) {

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
      <ul>
        <li>
          <img src={imagem} alt={descricao} onClick={abrirModal}/>
        </li>
      </ul>
    </div>
    <div>
      <Modal 
      mostrarModal={mostrarModal}
      fecharModal={fecharModal}
      id={id}
      descricao={descricao}
      imagem={imagem}
      tags={tags}
      linkGitHub={linkGitHub}
      linkDeploy={linkDeploy}
      />
    </div>
    </>

  );
}

export default ProjetosCadastrados;


/* <ul>
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
})} */