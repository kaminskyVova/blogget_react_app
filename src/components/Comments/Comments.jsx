import styles from './Comments.module.css';
import { formatDate } from './../../utils/formatDate';

export const Comments = ({ author, text, date }) => {

	return (
		<li className={styles.item}>
			<h3 className={styles.author} size={18} tsize={22}>
				{author}
			</h3>
			<p className={styles.comment} size={14} tsize={18}>
				{text}
				{formatDate(date)}
			</p>
		</li>
	);
};
