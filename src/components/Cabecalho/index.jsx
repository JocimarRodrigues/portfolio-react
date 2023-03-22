import React from 'react'
import CabecalhoLink from 'components/CabecalhoLink';
import styles from "./Cabecalho.module.scss";


function Cabecalho() {

  return (
    <header className={styles.cabecalho}>

    <nav className={styles.nav}>
    <CabecalhoLink url="./"> 
    <li>
      Home   
    </li>
    </CabecalhoLink>
    <CabecalhoLink url="./projetos">
      <li>
      Projetos
      </li>
    </CabecalhoLink>
    <CabecalhoLink url="./contato">
      <li>
      Cursos e Certificados
      </li>
    </CabecalhoLink>
    <CabecalhoLink url="./contato">
      <li>
      Contato
      </li>
    </CabecalhoLink>
    </nav>
    </header>
  )
}

export default Cabecalho;