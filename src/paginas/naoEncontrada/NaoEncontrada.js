import React from 'react'
import styles from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'componentes/botaoPrincipal/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
                <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e recarregue a página, ou volte para a página inicial</p>
                <p className={styles.paragrafo}>Aguarde</p>
                <div onClick = {()=> navegar("/")} className={styles.botaoContainer}>
                    <BotaoPrincipal tamanho = "lg">
                        Voltar para o início
                    </BotaoPrincipal>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt="cachorro de oculos e vestido como humanos" />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NaoEncontrada