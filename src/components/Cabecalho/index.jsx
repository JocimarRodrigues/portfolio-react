import React from 'react'
import CabecalhoLink from 'components/CabecalhoLink';
import styles from "./Cabecalho.module.scss";


function Cabecalho() {
  return (
    <header className={styles.cabecalho}>

    <nav className={styles.nav}>
    <CabecalhoLink url="./"> 
      Home
    </CabecalhoLink>
    <CabecalhoLink url="./projetos">
      Projetos
    </CabecalhoLink>
    </nav>
    </header>
  )
}

export default Cabecalho;