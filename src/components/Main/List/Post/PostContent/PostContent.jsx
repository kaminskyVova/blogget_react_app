import styles from '../Post.module.css';
import { BtnDel } from './BtnDel/BtnDel';
import { Text } from './../../../../../UI/Text/Text';

export const PostContent = ({ title, author }) => {
	return (
		<div className={styles.content}>
			<Text As="h2" className={styles.title}>
				<Text
					As="a"
					size={18}
					tsize={24}
					className={styles.linkPost}
					href="#post"
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
			<BtnDel />
		</div>
	);
};
