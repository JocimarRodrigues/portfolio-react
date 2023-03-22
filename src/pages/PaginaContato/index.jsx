import React from 'react'
import styles from './Contato.module.scss'

function PaginaContato() {
  return (
    <section className={styles.container}>
      <div>
        <ul>
          <li>
            <a href="">
              <img src="/assets/Imagens/Icones/GitHubC.png" alt="" />
            </a>
          </li>
          <li>
          <a href="">
              <img src="/assets/Imagens/Icones/li.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Email</h1>
        <h2>jocimarwkg@gmail.com</h2>
      </div>
    </section>
  )
}

export default PaginaContato