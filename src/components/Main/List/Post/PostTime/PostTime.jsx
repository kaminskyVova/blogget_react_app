import styles from '../Post.module.css';

import { formatDate } from '../../../../../utils/formatDate';

export const PostTime = ({date}) => {
	return (
		<time className={styles.date} dateTime={date}>
			{formatDate(date)}
		</time>
	);
};

