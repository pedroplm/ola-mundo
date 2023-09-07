import React from 'react'
import styles from './BotaoPrincipal.module.css'


function BotaoPrincipal({children, tamanho}) {
  return (
    <button className={`${styles.botao} ${styles[tamanho]}`}>{children}</button>
  )
}

export default BotaoPrincipal