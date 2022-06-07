import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

interface CommentProps {
  id: string,
  content: string;
  onDeleteComment: (id: string) => void;
}

export function Comment({ id, content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/rafaelppereira.png" name="Rafael Pereira" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Pereira</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            
            <button onClick={() => onDeleteComment(id)} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}