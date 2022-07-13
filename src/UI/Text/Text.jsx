import classNames from 'classnames';
import style from './Text.module.css';

export const Text = (props) => {
	const {
		As = 'span',
		color = 'black',
		size,
    fwsize,
		tsize,
		dsize,
		className,
		children,
		href,
	} = props;

	const classes = classNames(
		className,
		{ [style[`fs${size}`]]: size },
		style[color],
		{ [style[`fst${tsize}`]]: tsize },
		{ [style[`dst${dsize}`]]: dsize },
    { [style[`fw${fwsize}`]]: fwsize },
	);

	return (
		<As className={classes} href={href}>
			{children}
		</As>
	);
};
