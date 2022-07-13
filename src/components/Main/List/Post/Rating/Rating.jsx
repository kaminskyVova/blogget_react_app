import styles from '../Post.module.css';
import { Text } from './../../../../../UI/Text/Text';


export const Rating = ({ups}) => {
	return (
		<div className={styles.rating}>
			<button className={styles.up} aria-label="up rating" />
			<Text As='p' fwsize={900} className={styles.ups}>{ups}</Text>
			<button className={styles.down} aria-label="down rating" />
		</div>
	);
};
