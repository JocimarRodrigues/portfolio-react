import Carousel from "components/Carousel";

import styles from "./Projetos.module.scss";

import CadastroProjetos from "components/CadastroProjetos";

function PaginaProjetos() {
  return (
    <section className={styles.container}>
      <h1>HTML-CSS</h1>
      <Carousel>
        <div className={styles.lista}>
          <ul>
            <CadastroProjetos categoria="HTML-CSS" />
          </ul>
        </div>
      </Carousel>
      <h1>Javascript</h1>
      <Carousel>
        <div className={styles.lista}>
          <ul>
            <CadastroProjetos categoria="JavaScript" />
          </ul>
        </div>
      </Carousel>
      <h1>React</h1>
      <Carousel>
        <div className={styles.lista}>
          <ul>
            <CadastroProjetos categoria="React" />
          </ul>
        </div>
      </Carousel>
    </section>
  );
}

export default PaginaProjetos;

