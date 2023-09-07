import React from 'react'
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png"

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao mundo do pedrico!
        </p>
      </div>
      <div className={styles.imagens}>
        <img src={circuloColorido} aria-hidden = {true} alt="circulo colorido" className={styles.circuloColorido} />
        <img src="https://avatars.githubusercontent.com/u/111313362?v=4" alt="foto r2d2" className={styles.minhaFoto} />
      </div>
    </div>
  )
}

export default Banner