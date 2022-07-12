import styles from '../../Post.module.css';
import { ReactComponent as BtnDelIcon } from '../../../Post/img/delete.svg';

export const BtnDel = (props) => {
	return (
		<button className={styles.delete}>
			<BtnDelIcon />
		</button>
	);
};
