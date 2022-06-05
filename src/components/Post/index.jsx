import styles from './Post.module.css';

import {Skills} from './Skills';

export function Post() {

    return (
        <article className={styles.post}> 
            <header className={styles.headerContainer}> 
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/renancorreadev.png" alt="" />                    
                </div>

                <div className={styles.leftContainer}>
                    <div className={styles.authorinfo}>
                        <span className={styles.name}>Renan Correa</span>
                        <span> | </span>
                            <span className={styles.cargo}>Web Developer</span>
                        </div>
                    <time title="11 de maio de 2022" dateTime="2022-05-11 08:13:25">Publicado   há 1 hora.
                    </time>

                    <Skills/>
                </div>
            </header>  

            <div className={styles.content}>
                <p>Hi, Guys!</p>
                <p>
                Lorem labore ipsum anim ullamco deserunt. Minim eiusmod adipisicing dolor consectetur officia sint excepteur. Mollit mollit aliquip exercitation ipsum incididunt minim laboris exercitation nostrud 
                </p>
                <div className={styles.link}>
                    <p >
                        <a href="#">
                        🎸 Jane MCAvoy.
                        </a>
                    </p>
                    <p>  
                        <a href="#">
                        #new project 
                        </a>
                    </p>
                    <p >
                        <a href="#">
                            #skynet.
                        </a>
                    </p>
                </div>
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
        </article>
    )
}