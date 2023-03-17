import Carousel from 'components/Carousel';
import React from 'react'
import styles from './Projetos.module.scss';

function Projetos() {
  return (
    <div className={styles.container}>Projetos
    <Carousel>
      <li>
        <img src="/imagens/fujiwara.png" alt="" />
      </li>
    </Carousel>
    </div>
  )
}

export default Projetos