import React, { useRef } from 'react'

import styles from './Carousel.module.scss';
import seta from './seta.png'

function Carousel({children}) {
    const carousel = useRef(null);

    const aoClicarEsquerda = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        console.log(carousel.current.offsetWidth)
        
        
        
    }
    const aoClicarDireita = (e) => {
        e.preventDefault();
        
        
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        console.log(carousel.current.offsetWidth)
    }

  return (
    <>
    <div className={styles.container}>
        <div className={styles.carousel} ref={carousel}>
            <div className={styles.item}>
                <div className={styles.image}>
                {children}

                </div>
            </div>
        </div>
    <div className={styles.buttons}>
    <button className={styles.esquerda} onClick={aoClicarEsquerda}>
        <img src={seta} alt="Seta-Esquerda" />
    </button>    
    <button className={styles.direita} onClick={aoClicarDireita}>
    <img src={seta} alt="Seta-Direita" />
    </button>
    </div>
    </div>
    </>
  )
}

export default Carousel

/* <img src="./Imagens/megumin2.png" alt="Children" /> */