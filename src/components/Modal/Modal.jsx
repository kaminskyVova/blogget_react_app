import styles from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';

export const Modal = ({ title, author, markdown, closeModal }) => {
	const overlayRef = useRef(null);
	const closeBtnRef = useRef(null);

	const handleClick = ({ target }) => {
		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape') {
				closeModal();
			}
		});
		if (target === overlayRef.current || target === closeBtnRef.current) {
			closeModal();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className={styles.overlay} ref={overlayRef}>
			<div className={styles.modal}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.content}>
					<Markdown
						options={{
							overrides: {
								a: {
									props: {
										target: '_blank',
									},
								},
							},
						}}
					>
						{markdown ? markdown : 'Text Content'}
					</Markdown>
				</div>
				<p className={styles.author}>{author}</p>
				<button className={styles.close}>
					<CloseIcon ref={closeBtnRef} />
				</button>
			</div>
		</div>,
		document.getElementById('modal-root')
	);
};

Modal.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	markdown: PropTypes.string,
	closeModal: PropTypes.func,
};
