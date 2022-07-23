import { useContext } from 'react';
import { postContext } from '../../../context/postContext';
import styles from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = useContext(postContext);
	return (
		<ul className={styles.list}>
			{postsData.map(({ data }) => (
				<Post key={data.id} postData={data} />
			))}
		</ul>
	);
};
