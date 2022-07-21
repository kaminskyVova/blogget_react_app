import { useState, useContext } from 'react';
import styles from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from './../../../api/auth';
import { Text } from './../../../UI/Text/Text';
import { tokenContext } from './../../../context/tokenContext';
import { authContext } from './../../../context/authContext';

export const Auth = () => {
	const { delToken } = useContext(tokenContext);
	const [logout, setLogout] = useState(false);
	const {auth, clearAuth} = useContext(authContext)

	const handlerClickLogin = () => {
		if (logout === true) setLogout(false);
		if (logout === false) setLogout(true);
	};

	const handlerClickLogout = () => {
		delToken();
		clearAuth();
	};

	return (
		<div className={styles.container}>
			{auth.name ? (
				<>
					<button className={styles.btn} onClick={handlerClickLogin}>
						<img
							className={styles.img}
							src={auth.img}
							title={auth.name}
							alt={`Аватар:${auth.name}`}
						/>
					</button>
					{logout ? (
						<button onClick={handlerClickLogout} className={styles.logout}>
							Выйти
						</button>
					) : (
						''
					)}
				</>
			) : (
				<Text className={styles.authLink} As="a" href={urlAuth}>
					<LoginIcon className={styles.svg} width={128} height={128} />
				</Text>
			)}
		</div>
	);
};

Auth.propTypes = {
	token: PropTypes.string,
};
