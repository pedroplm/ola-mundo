import PostModelo from 'componentes/postModelo/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

function SobreMim() {
  return (
    <>
      <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"

      >
        <h3 className={styles.subtitulo}>Olá, sou R2D2</h3>
        <img
          src = "https://images5.alphacoders.com/402/402078.jpg"
          alt="Foto do R2d2"
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>A resourceful astromech droid, R2-D2 served Padmé Amidala, Anakin Skywalker and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils</p>
        <p className={styles.paragrafo}>A resourceful astromech droid, R2-D2 served Padmé Amidala, Anakin Skywalker and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils</p>
        <p className={styles.paragrafo}>A resourceful astromech droid, R2-D2 served Padmé Amidala, Anakin Skywalker and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils</p>
      </PostModelo>
    </>
  )
}

export default SobreMim