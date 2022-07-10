import styles from '../Post.module.css';
import notPhoto from '../img/notphoto.jpg';

export const Photo = ({title}) => {
  return (
    <img className={styles.img} src={notPhoto} alt={title} />
  );
};


