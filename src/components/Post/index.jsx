import styles from './Post.module.css';
import {useState} from 'react'

import { Skills } from './Skills';
import { Comment } from './Comment';
import { Avatar } from '../Avatar';
import {Mutant} from './Mutant';

import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", ptBR);
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});
    const [comments, setComments] = useState(['Post Fantástico!!']);
    const [newComment, setNewComment] = useState('');
    const handleNewCommentChange = () => {
       setNewComment(event.target.value) 
    }
    const handleCreateNewComment = () => {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment(''); //limpar o input
    }
    const commentToDelete = (commentDelete) =>{ 
    //Deletar comentario.
       const commentWithoutLast = comments.filter(comment => {
             return comment !== commentDelete;
       })
        setComments(commentWithoutLast);
    }


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
                        return <p key={item.content}>{item.content}</p>
                    }else if (item.type == "link"){
                        return (
                            <p key={item.content}>
                             <a href="#">
                              {item.linkContent}
                             </a>
                         </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>
                    Deixe seu FeedBack
                </strong>

                <textarea 
                    name="comment" 
                    className={styles.textarea} 
                    placeholder="Deixe seu Comentario" 
                    onChange={handleNewCommentChange}
                    value={newComment}
                />

                <footer>
                  <button type="submit" className={styles.button}>Publicar</button>
                </footer>
            </form>

            <div className={styles.Mutantcontainer}>
                {content.map?.(item => {
                    if(item.type === "mutant") {
                        return (
                            <Mutant
                            key={item.content} 
                            mutant={item.content}
                            />
                        )
                    }
                })}
            </div>

            <div className={styles.commentList}>
                {comments?.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={commentToDelete}/>
                })}
            </div>
        </article>
    )
}
