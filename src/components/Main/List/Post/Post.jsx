import styles from './Post.module.css';
import PropTypes from 'prop-types';

import { PostContent } from './PostContent/PostContent';
import { Rating } from './Rating/Rating';
import { PostTime } from './PostTime/PostTime';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { useCommentsData } from '../../../../hooks/useCommentsData';

export const Post = ({ postData }) => {
	const [post, comments] = useCommentsData(postData.id);
	const {
		thumbnail,
		title,
		author,
		ups,
		created: date,
		selftext: markdown,
	} = postData;

	return (
		<li className={styles.post}>
			<Thumbnail thumbnail={thumbnail} title={title} />
			<PostContent
				title={title}
				author={author}
				markdown={markdown}
				id={postData.id}
				// comments={comments}
			/>
			<Rating ups={ups} />
			<PostTime date={date} />
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
