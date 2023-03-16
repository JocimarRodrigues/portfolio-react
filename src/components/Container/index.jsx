import styles from './Container.module.scss';

import React from 'react'

function Container( {children }) {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Container