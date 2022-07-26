import styles from './Comments.module.css';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatDate';
import Markdown from 'markdown-to-jsx';

export const Comments = ({ comments }) => {
	let commentsArr = '';

	if (comments) {
		if (comments.length === 0) {
			commentsArr = 'Нет комментариев';
		} else {
			commentsArr = comments.map((comment) => (
				<li key={comment.id} className={styles.item}>
					<h3 className={styles.author}>{comment.author}</h3>
					<div className={styles.comment}>
						{/* <Markdown>{comment.body}</Markdown> */}
						{comment.body}
					</div>
					<time className={styles.comment} dateTime={comment.created_utc}>
						{formatDate(comment.created_utc)}
					</time>
				</li>
			));
		}
	} else {
		commentsArr = 'Загрузка...';
	}
	return <ul className={styles.list}>{commentsArr}</ul>;
};

Comments.propTypes = {
	comments: PropTypes.array,
};
