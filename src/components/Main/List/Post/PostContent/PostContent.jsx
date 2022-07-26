import styles from '../Post.module.css';
import { BtnDel } from './BtnDel/BtnDel';
import { Text } from './../../../../../UI/Text/Text';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './../../../../Modal/Modal';
import Comments from '../../../../Comments/index';
import { FormComment } from '../../../../FormComment/FormComment';

export const PostContent = ({ title, author, markdown, id }) => {
	// const showComments = () => {
	// 	let commentsArr = []
	// 	if (comments) {
	// 		comments.forEach((item) => {
	// 			commentsArr.push(
	// 				<Comments key={item.id}
	// 					author={item.author}
	// 					text={item.body}
	// 					date={item.created_utc}
	// 				/>
	// 			);
	// 		});
	// 	}
	// 	return commentsArr
	// };

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles.content}>
			<Text As="h2" className={styles.title}>
				<Text
					As="a"
					size={18}
					tsize={24}
					className={styles.linkPost}
					href="#post"
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					{title}
				</Text>
			</Text>
			<Text
				As="a"
				size={12}
				fwsize={500}
				tsize={14}
				color="orange"
				className={styles.linkAuthor}
				href="#author"
			>
				{author}
			</Text>

			{isModalOpen && (
				<Modal
					// title={title}
					// author={author}
					// markdown={markdown}
					id={id}
					closeModal={() => {
						setIsModalOpen(false);
					}}
				/>
			)}
			{/* <FormComment /> */}
			{/* <ul style={{padding: '15px 0'}}> */}
				{/* {comments
					? comments.map((item) => {
							<Comments
								author={item.author}
								text={item.body}
								date={item.created_utc}
							/>;
					  })
					: 'Loading...'} */}
			{/* {showComments()} */}
			{/* </ul> */}
			<BtnDel />
		</div>
	);
};

PostContent.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	markdown: PropTypes.string,
};
