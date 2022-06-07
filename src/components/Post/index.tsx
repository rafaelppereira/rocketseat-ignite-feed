import { FormEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { v4 as createId } from 'uuid';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

export function Post({
  author,
  content,
  publishedAt
}: PostProps) {

  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publibledDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();

    const createRandomId = createId();

    if (newCommentText != '') {
      setComments([...comments, {
        id: createRandomId,
        content: newCommentText
      }]);
      setNewCommentText('');
    }
  }

  function handleDeleteComment(id: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== id;
    });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} name={author.name} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publibledDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm} >
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment.id}
            id={comment.id}
            content={comment.content}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}