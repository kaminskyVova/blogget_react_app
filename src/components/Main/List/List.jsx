import styles from './List.module.css';
import { Post } from './Post/Post';

export const List = (props) => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2022-02-24T09:45:00.000Z',
  };

  return (
    <ul className={styles.list}>
      <Post postData={postData} />
    </ul>
  );
};
