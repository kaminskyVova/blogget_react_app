import React from 'react';
import styles from './Header.module.css';

import { Layout } from '../Layout/Layout';
import { Logo } from '../Header/Logo/Logo';
import { Heading } from '../Header/Heading/Heading';
import { Search } from '../Header/Search/Search';
import { Auth } from '../Header/Auth/Auth';
import PropTypes from 'prop-types';

export const Header = ({ token, delToken }) => {
	return (
		<header className={styles.header}>
			<Layout>
				<div className={styles.gridContainer}>
					<Logo />
					<Heading text={'Главная'} />
					<Search />
					<Auth token={token} delToken={delToken} />
				</div>
			</Layout>
		</header>
	);
};

Header.propTypes = {
	token: PropTypes.string,
};
