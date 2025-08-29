import styles from './Flex.module.css'
function Flex() {
    return (
        <div>
            <div className={styles.flex}>
                <div className={styles.inicio}>
                    <img src="src/componentes/img/logo.jpg" alt="Logo" />
                    <h1>Inicio</h1>
                    <h2>Explorar</h2>
                    <h2>Notificações</h2>
                    <h2>Músicas Curtidas</h2>
                    <h2>Comunidades</h2>
                    <h2>Perfil</h2>
                    <div className={styles.inicio_end}>
                        <button>Avaliar</button>
                        <div>
                            <img src="src/componentes/img/ft01.jpg" alt="" />
                            <h2>Pedrothc</h2>
                        </div>
                        <h3>@Pedrothc</h3>
                    </div>
                </div>


                <article className={styles.post}>
                    <div className={styles.inicio_meio}>
                        <h2>inicio</h2>
                        <h2>Comu Do Rock</h2>
                        <h2>Trap Dos Cria</h2>
                    </div>
                    <div className={styles.post_perf}>
                        <h2>inicasdgio</h2>
                        <h2>Comu Do Rock</h2>
                        <h2>Trap Dos Cria</h2>
                    </div>
                </article>





                <h1>3</h1>
            </div>

        </div>

    )

}

export default Flex