import styles from './FormComment.module.css';
import { Text } from './../../UI/Text/Text';
import { authContext } from './../../context/authContext';
import { useContext, useRef } from 'react';


export const FormComment = (props) => {
	const {auth} = useContext(authContext)
	const refTextarea = useRef(null)
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(refTextarea.current.value);
		refTextarea.current.value = ''
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Text As='h3' size={14} tsize={18}>
				{auth.name}
			</Text>
			<textarea className={styles.textarea} ref={refTextarea}></textarea>
			<button className={styles.btn}>Отправить</button>
		</form>
	);
};
