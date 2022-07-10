import React from 'react';
import styles from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};