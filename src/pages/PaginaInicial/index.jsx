import Habilidades from "components/Habilidades";
import React, { useEffect, useRef } from "react";
import foto from "./megumin.jpg";
import styles from "./PaginaInicial.module.scss";
import { motion } from 'framer-motion'
import Carousel from "components/Carousel";



function PaginaInicial() {
  const nomeRef = useRef(null);

  useEffect(() => {
    if (nomeRef.current) {
      animacaoNoNome(nomeRef.current);
    }
  }, []);

  function animacaoNoNome(e) {
    const textArray = e.innerHTML.split('');
    e.innerHTML = '';
    textArray.forEach((letra, i) => {
      setTimeout(function() {
        e.innerHTML += letra
      }, 75 * i)
    })
  }







  return (
    <main>
      <section>
        <div className={styles.apresentacao}>
          <img src={foto} alt="" />
          <h1 className={styles.texto}>Olá, me chamo</h1>
          <span ref={nomeRef} className={styles.texto}>Jocimar Rodrigues</span>
          <h2 className={styles.texto}>Sou Desenvolvedor Front-End</h2>
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
      <section className={styles.sobre} id="conteudo">
        <motion.div className={styles.conteudo}>
          <h1>Sobre Mim</h1>
          <p>Olá, meu nome é Jocimar Rodrigues, sempre fui apaixonado por tecnologia, mas nunca tinha tido contato
                    com a programação, até pouco tempo, quando um amigo ingressou no mercado e me explicou como o mesmo
                    funciona e a prática. Decidi me dedicar e tentar aprender e, quando o fiz, me identifiquei com a
                    área. Programar acabou virando um hobby, fiquei fascinado em aprender novas linguagens e resolver
                    problemas. Atualmente estou estudando com
                    foco em me tornar dev Front-End, neste portfólio você poderá ver os projetos que desenvolvi até
                    agora e poderá acompanhar minha evolução.</p>
        </motion.div>
      </section>
      <Habilidades />
    </main>

  );
}

export default PaginaInicial;
