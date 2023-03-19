import React from 'react'
import styles from './Modal.module.scss'

function Modal({mostrarModal, descricao, fecharModal}) {

  return (

        <>
        {mostrarModal && (
                 <div className={styles.overlay}>
                 <div className={styles.conteudo}>
                   <div className={styles.fechar}>
                     <button onClick={fecharModal}>X</button>
                   </div>
                   <div className={styles.grid}>
                     <img ></img>
                     <h1>{descricao}</h1>
                     <h2>Descrição</h2>
                     <h2></h2>
                     <h4></h4>
                   </div>
                 </div>
               </div>
        )}
        </>

  )
}

export default Modal