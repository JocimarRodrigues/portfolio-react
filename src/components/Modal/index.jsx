import React from "react";
import styles from "./Modal.module.scss";

function Modal({
  mostrarModal,
  descricao,
  fecharModal,
  imagem,
  titulo,
  linkGitHub,
  linkDeploy,
  tags,
}) {
  return (
    <>
      {mostrarModal && (
        <div className={styles.overlay}>
          <div className={styles.conteudo}>
            <div className={styles.grid}>
              <div className={styles.fechar}>
                <button onClick={fecharModal}>X</button>
              </div>
              <img src={imagem} alt={descricao} />
              <h1>{titulo}</h1>
              <h2>{descricao}</h2>
              <h3>Tecnologias No Projeto</h3>
              <h4>{tags}</h4>
              <div className={styles.buttons}>
                <a href={linkGitHub}>
                  <button className={styles.btnGitHub}>GitHub</button>
                </a>
                <a href={linkDeploy}>
                  <button className={styles.btnLinkedin}>Deploy</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
