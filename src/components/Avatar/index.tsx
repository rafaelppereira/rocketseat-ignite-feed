import styles from './styles.module.css';

interface AvatarProps {
  src: string;
  name: string;
  hasBorder?: boolean;
}

export function Avatar({ src, name, hasBorder }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={`Foto de avatar do ${name}`} 
    />
  );
}