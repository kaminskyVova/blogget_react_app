import styles from './List.module.css';
import { Post } from './Post/Post';
import { useContext } from 'react';
import { tokenContext } from './../../../context/tokenContext';
import { useBestPosts } from './../../../hooks/useBestPosts';
import { bestPostsContext } from './../../../context/bestPostsContext';

export const List = (props) => {
	// const [bestPosts] = useBestPosts()
	const {bestPosts} = useContext(bestPostsContext)
	// console.log('bestPosts: ', bestPosts);
	const postsData = [
		{
			thumbnail: '',
			title: 'Title1',
			author: 'Nickname',
			ups: 24,
			date: '2022-02-24T09:45:00.000Z',
			id: '123',
		},
		{
			thumbnail: '',
			title: 'Title2',
			author: 'Nickname',
			ups: 34,
			date: '2022-02-24T09:45:00.000Z',
			id: '453',
		},
		{
			thumbnail: '',
			title: 'Title3',
			author: 'Nickname',
			ups: 21,
			date: '2022-02-24T09:45:00.000Z',
			id: '554',
		},
		{
			thumbnail: '',
			title: 'Title4',
			author: 'Nickname',
			ups: 67,
			date: '2022-02-24T09:45:00.000Z',
			id: '766',
		},
	];

	return (
		<ul className={styles.list}>
			{postsData.map((postData) => {
				return <Post key={postData.id} postData={postData} />;
			})}
		</ul>
	);
};
