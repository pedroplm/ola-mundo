import React from 'react';
import styles from './Inicio.module.css';
import posts from 'json/posts.json'
import Post from 'componentes/postCard/PostCard'

function Inicio() {
  return (
    <>
      <ul className={styles.posts}>
          {posts.map((post) => {
            return (
              <li key = {post.id}>
                <Post post = {post}/>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Inicio