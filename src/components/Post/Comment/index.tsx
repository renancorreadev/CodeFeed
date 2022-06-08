import {useState} from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from '../../Avatar'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount(likeCount+1);
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
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}