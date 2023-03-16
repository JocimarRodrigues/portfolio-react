import React from "react";
import foto from "./megumin.jpg";
import styles from "./PaginaInicial.module.scss";

function PaginaInicial() {
  return (
    <main>
      <section>
        <div className={styles.apresentacao}>
          <img src={foto} alt="" />
          <h1>Olá, me chamo</h1>
          <span>Jocimar Rodrigues</span>
          <h2>Sou Desenvolvedor Front-End</h2>
            <ul>
              <li>
              <a  href="https://www.linkedin.com/in/jocimar-rodrigues-chagas/">
                <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Badget Linkedin" />
              </a>
              </li>
              <li>
              <a  href="">
                <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=whitee" alt="Badget Gmail" />
              </a>
              </li>
              <li>
              <a  href="https://github.com/JocimarRodrigues">
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Badget Github" />
              </a>
              </li>
            </ul>
          

        </div>
      </section>
      <section className={styles.sobre}>
        <div>

        </div>
      </section>
    </main>
  );
}

export default PaginaInicial;
