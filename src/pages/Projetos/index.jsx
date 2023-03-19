import Carousel from 'components/Carousel';
import React from 'react'
import styles from './Projetos.module.scss';

function Projetos() {
  return (
    <body className={styles.projetos}>
      
    <main>

    <section>

    <div className={styles.container}>Projetos
    <h1>Projetos em Javascript</h1>
    <Carousel>
      <li>
        <img src="/imagens/fujiwara.png" alt="" />
      </li>
    </Carousel>
    </div>
    </section>
    <section>
      <div>
        <h1>Projetos em React</h1>
        <Carousel>
          <li>
            <img src="" alt="" />
          </li>
        </Carousel>
      </div>
    </section>
    </main>
    </body>
  )
}

export default Projetos