import styles from '../Post.module.css';
import { BtnDel } from './BtnDel/BtnDel';

export const PostContent = ({ title, author }) => {
	return (
		<div className={styles.content}>
			<h2 className={styles.title}>
				<a className={styles.linkPost} href="#post">
					{title}
				</a>
			</h2>
			<a className={styles.linkAuthor} href="#author">
				{author}
			</a>
			<BtnDel />
		</div>
	);
};
