import styles from './FormComment.module.css';

export const FormComment = (props) => {
	return (
		<form className={styles.form}>
			<h3 size={14} tsize={18}>
				Имя авторизованного пользователя
			</h3>
			<textarea className={styles.textarea}></textarea>
			<button className={styles.btn}>Отправить</button>
		</form>
	);
};
