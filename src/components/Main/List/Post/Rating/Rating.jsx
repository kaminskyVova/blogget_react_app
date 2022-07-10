import styles from '../Post.module.css';

export const Rating = ({ups}) => {
	return (
		<div className={styles.rating}>
			<button className={styles.up} aria-label="up rating" />
			<p className={styles.ups}>{ups}</p>
			<button className={styles.down} aria-label="down rating" />
		</div>
	);
};
