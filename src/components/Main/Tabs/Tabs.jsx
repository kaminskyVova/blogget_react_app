import styles from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from './../../../utils/debounce';

export const Tabs = () => {
	const LIST = [
		{ value: 'Главная', Icon: HomeIcon },
		{ value: 'Топ', Icon: TopIcon },
		{ value: 'Лучшие', Icon: BestIcon },
		{ value: 'Горячие', Icon: HotIcon },
	].map(assignId);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [btnText, setBtnText] = useState('Открыть список');
	const [BtnIcon, setBtnIcon] = useState('');
	const [isDropdown, setIsDropDown] = useState(true);

	const handleResize = () => {
		if (document.documentElement.clientWidth < 768) {
			setIsDropDown(true);
		} else {
			setIsDropDown(false);
		}
	};

	useEffect(() => {
		const debounceResize = debounceRaf(handleResize);
		debounceResize();
		window.addEventListener('resize', debounceResize);

		return () => {
			window.removeEventListener('resize', debounceResize);
		};
	}, []);

	const handleClick = (value, Icon) => {
		setBtnText(value);
		setBtnIcon(Icon);
	};

	return (
		<div className={styles.container}>
			{isDropdown && (
				<div className={styles.wrapperBtn}>
					<button
						className={styles.btn}
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						{btnText}
						{BtnIcon && <BtnIcon width={35} height={35} />}
						<ArrowIcon width={15} height={15} />
					</button>
				</div>
			)}

			{(isDropdownOpen || !isDropdown) && (
				<ul className={styles.list} onClick={() => setIsDropdownOpen(false)}>
					{LIST.map(({ value, id, Icon }) => (
						<li className={styles.item} key={id}>
							<button
								className={styles.btn}
								onClick={(e) => {
									handleClick(value, Icon);
								}}
							>
								{value}
								{Icon && <Icon width={35} height={35} />}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

Tabs.propTypes = {
	list: PropTypes.array,
	setList: PropTypes.func,
};
