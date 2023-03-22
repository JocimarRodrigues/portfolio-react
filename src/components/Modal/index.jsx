import React from 'react'
import styles from './Modal.module.scss'

function Modal({mostrarModal, descricao, fecharModal, imagem, titulo}) {

  return (

        <>
        {mostrarModal && (
                 <div className={styles.overlay}>
                 <div className={styles.conteudo}>
                   <div className={styles.fechar}>
                     <button onClick={fecharModal}>X</button>
                   </div>
                   <div className={styles.grid}>
                      <img src={imagem} alt={descricao} />
                     <h1>{titulo}</h1>
                     <h2>{descricao}</h2>
                     <h4>s</h4>
                   </div>
                 </div>
               </div>
        )}
        </>

  )
}

export default Modal