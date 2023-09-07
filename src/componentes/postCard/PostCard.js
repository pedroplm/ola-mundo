import React from 'react'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'componentes/botaoPrincipal/BotaoPrincipal'

function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
          <img 
              src = {`assets/posts/${post.id}/capa.png`} 
              alt="imagem da capa" 
              className={styles.capa} 

          />
          <h2 className={styles.titulo}>{post.titulo}</h2>
          <BotaoPrincipal>
            Ler
          </BotaoPrincipal>
      </div>
    </Link>
  )
}

export default PostCard