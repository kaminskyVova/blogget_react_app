import styles from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useRef, useEffect, Component } from 'react';
import { useCommentsData } from './../../hooks/useCommentsData';
import { FormComment } from '../FormComment/FormComment';
import {Comments} from '../Comments/Comments';

export const Modal = ({ closeModal, id }) => {
	const overlayRef = useRef(null);
	const closeBtnRef = useRef(null);
	const [post, comments] = useCommentsData(id);


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
				<h2 className={styles.title}></h2>
				<div className={styles.content}>
					{/* {markdown} */}
					{/* <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            {markdown}
          </Markdown> */}
				</div>
				{/* <p className={styles.author}>{author}</p> */}
				<FormComment />
				<Comments comments={comments} />
				<button className={styles.close} >
					<CloseIcon />
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
