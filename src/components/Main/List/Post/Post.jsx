import styles from './Post.module.css';
import PropTypes from 'prop-types';

import { Photo } from './Photo/Photo';
import { PostContent } from './PostContent/PostContent';
import { Rating } from './Rating/Rating';
import { PostTime } from './PostTime/PostTime';

export const Post = ({ postData }) => {
	const { title, author, ups, date } = postData;

	return (
		<li className={styles.post}>
			<Photo title={title} />
			<PostContent title={title} author={author} />
			<Rating ups={ups} />
			<PostTime date={date} />
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
