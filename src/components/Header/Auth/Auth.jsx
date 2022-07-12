import React from 'react';
import styles from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';

export const Auth = ({ user }) => {
	console.log();
	return (
		<button className={styles.button}>
			{user ? (
				user
			) : (
				<LoginIcon className={styles.svg} width={128} height={128} />
			)}
		</button>
	);
};

Auth.propTypes = {
	user: PropTypes.bool,
};
