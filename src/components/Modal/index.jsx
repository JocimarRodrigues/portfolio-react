import React from 'react'
import styles from './Modal.module.scss'

function Modal({mostrarModal, descricao, fecharModal, imagem, titulo, linkGitHub, linkDeploy}) {

  return (

        <>
        {mostrarModal && (
                 <div className={styles.overlay}>
                 <div className={styles.conteudo}>
     
                   <div className={styles.grid}>
                      <img src={imagem} alt={descricao} />
                      <div className={styles.fechar}>
                     <button onClick={fecharModal}>X</button>
                   </div>
                     <h1>{titulo}</h1>
                     <h2>{descricao}</h2>
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

  )
}

export default Modal