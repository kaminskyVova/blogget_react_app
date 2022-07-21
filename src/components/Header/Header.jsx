import styles from './Header.module.css';

import { Layout } from '../Layout/Layout';
import { Logo } from '../Header/Logo/Logo';
import { Heading } from '../Header/Heading/Heading';
import { Search } from '../Header/Search/Search';
import { Auth } from '../Header/Auth/Auth';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Layout>
				<div className={styles.gridContainer}>
					<Logo />
					<Heading text={'Главная'} />
					<Search />
					<Auth />
				</div>
			</Layout>
		</header>
	);
};
