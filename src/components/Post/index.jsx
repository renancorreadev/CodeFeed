import styles from './Post.module.css';

import { Skills } from './Skills';
import { Comment } from './Comment';
import { Avatar } from '../Avatar';

import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", ptBR);
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

    return (
        <article className={styles.post}> 
            <header className={styles.headerContainer}> 
                <div className={styles.author}>
                <Avatar className={styles.avatar}  src={author.avatarUrl} />
                </div>

                <div className={styles.leftContainer}>
                    <div className={styles.authorinfo}>
                        <strong className={styles.name}>{author.name}</strong>
                        <span> | </span>
                            <span className={styles.cargo}>{author.role}</span>
                        </div>
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow}
                    </time>

                    <Skills/>
                </div>
            </header>  

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === "paragraph") {
                        return <p>{item.content}</p>
                    }else if (item.type == "link"){
                        return (
                            <p>
                             <a href="#">
                              {item.linkContent}
                             </a>
                         </p>
                        )
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>
                    Deixe seu FeedBack
                </strong>

                <textarea className={styles.textarea} placeholder="Deixe seu Comentario" />

                <footer>
                  <button type="submit" className={styles.button}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}