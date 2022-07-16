import { useState } from 'react';
import styles from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from './../../../api/auth';
import { Text } from './../../../UI/Text/Text';
import { URL_API } from './../../../api/const';
import { useAuth } from './../../../hooks/useAuth';

export const Auth = ({ token, delToken }) => {
	const [auth, setAuth] = useState({});
	const [logout, setLogout] = useState(false);

	const handlerClickLogin = () => {
		if (logout === true) setLogout(false);
		if (logout === false) setLogout(true);
	};

	const handlerClickLogout = () => {
		delToken();
		setAuth({});
	};

	useAuth(URL_API, setAuth, token, delToken);

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
						{/* <Text AS="span">{auth.name}</Text> */}
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
