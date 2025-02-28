import { HandsClapping, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) =>  {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/itsdavss.png" alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Davi Oliveira</strong>
              <time title='23 de fevereiro às 17:59h' dateTime="2025-02-23 17:59:00">Cerca de 2h atrás</time>
            </div>

            <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}