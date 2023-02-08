import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/RafaelPablo.png"/> 

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Pablo</strong>
                            <time title="02 de Fevereiro às 08:44" dateTime="2023-02-04 08:44:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>  
        </div>
    )
}