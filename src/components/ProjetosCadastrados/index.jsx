<<<<<<< HEAD
import Modal from "components/Modal";
import React, { useState } from "react";

=======
import React from "react";
import Cards from "./Cards";
import projetos from './projetos.json';
>>>>>>> 76a4e5766f9fef8dfaa86dd7f5f1574bc8f7a230



<<<<<<< HEAD
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

        <li>
          <img src={imagem} alt={descricao} onClick={abrirModal}/>
        </li>

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

=======
function ProjetosCadastrados({ categoria }) {


  return (
    <section>
        <div>
            
                {projetos.map((item) => categoria === item.categoria && (
                    <Cards 
                    key={item.id}
                    imagem={item.imagem}
                    />
                ))}
     
        </div>
    </section>
>>>>>>> 76a4e5766f9fef8dfaa86dd7f5f1574bc8f7a230
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