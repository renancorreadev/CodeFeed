import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from '../../Avatar'

export function Comment({content, onDeleteComment}) {

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    return (
        <div className={styles.commentContainer}>
            <Avatar
                className={styles.avatar}
                src="https://github.com/renancorreadev.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndtime}>
                            <strong>Devon Alexandre</strong>
                            <time title="11 de maio de 2022" dateTime="2022-05-11 08:13:25">
                                Cerca de 1 hora atrás
                            </time>   
                        </div>
                         <button onClick={handleDeleteComment} title="Deletar Comentario">
                                <Trash size={24} />
                         </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button >
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}