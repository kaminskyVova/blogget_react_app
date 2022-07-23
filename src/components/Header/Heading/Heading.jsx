import styles from './Heading.module.css';
import PropTypes from 'prop-types';
import { Text } from './../../../UI/Text/Text';

export const Heading = ({text}) => {
  return (
    <Text As='h1' size={22} tsize={26} bold center className={styles.heading}>
    {text}
  </Text>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};
