import styles from './Post.module.css';
import PropTypes from 'prop-types';

import { PostContent } from './PostContent/PostContent';
import { Rating } from './Rating/Rating';
import { PostTime } from './PostTime/PostTime';
import { Thumbnail } from './Thumbnail/Thumbnail';

export const Post = ({ postData }) => {
	// console.log('postData: ', postData);
	const { thumbnail, title, author, ups, created: date, selftext: markdown, } = postData;

	return (
		<li className={styles.post}>
			<Thumbnail thumbnail={thumbnail} title={title} />
			<PostContent title={title} author={author} markdown={markdown} />
			<Rating ups={ups} />
			<PostTime date={date} />
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
