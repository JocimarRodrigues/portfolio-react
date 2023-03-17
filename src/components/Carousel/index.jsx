import React from 'react'

import styles from './Carousel.module.scss';

function Carousel() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="" alt="" />
        </div>
        <div className={styles.carousel}>
            <div className={styles.item}>
                <div className={styles.image}>
                <img src="./Imagens/megumin2.png" alt="Children" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel