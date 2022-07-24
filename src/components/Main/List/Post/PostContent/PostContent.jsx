import styles from '../Post.module.css';
import { BtnDel } from './BtnDel/BtnDel';
import { Text } from './../../../../../UI/Text/Text';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './../../../../Modal/Modal';

export const PostContent = ({ title, author, markdown }) => {
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
					title={title}
					author={author}
					markdown={markdown}
					closeModal={() => {
						setIsModalOpen(false);
					}}
				/>
			)}
			<BtnDel />
		</div>
	);
};

PostContent.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	markdown: PropTypes.string,
};
