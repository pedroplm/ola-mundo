import React from 'react'
import styles from './MenuLink.module.css';
import { Link, useLocation } from 'react-router-dom'

function MenuLink({children, to}) {
    const localizacao = useLocation(); //window.location

  return (
    <Link to= {to} className={
        `${styles.link}
        ${localizacao.pathname === to ? styles.linkDestacado :'' }`
    }>
        {children}
    </Link>
  )
}

export default MenuLink