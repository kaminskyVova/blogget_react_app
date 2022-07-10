import React from 'react';
import {Layout} from '../Layout/Layout';
import {Tabs} from './Tabs/Tabs';
import {List} from './List/List';
import styles from './Main.module.css';

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Layout>
				<Tabs />
				<List />
			</Layout>
    </main>
  );
};
