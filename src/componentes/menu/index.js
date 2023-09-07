import React from 'react'
import styles from "./Menu.module.css"
import MenuLink from '../menuLink';

function Menu() {

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to= {"/"}>
                Inicio
            </MenuLink>
            <MenuLink to = {"/sobremim"}>
                Sobre Mim
            </MenuLink>
        </nav>
    </header>
  )
}

export default Menu