import React from 'react'
import styles from './Habilidades.module.scss';
import icones from './icones.json';

function Habilidades() {






  return (
    <div className={styles.container}>       
    <ul>
    {icones.map((item) => {
      return (
        <li key={item.id}>
         
          <img src={item.imagem}></img>
        </li>
      )
    })}

    </ul>
    </div>
  )
}

export default Habilidades