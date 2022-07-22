import { useEffect, useState, useContext } from 'react';
import { URL_API } from './../api/const';
import { tokenContext } from './../context/tokenContext.jsx';

export const useBestPosts = () => {
	const { token } = useContext(tokenContext);
	const [bestPosts, setBestPosts] = useState('');

	useEffect(() => {
		if (!token) return;

		try {
			fetch(`${URL_API}/best?limit=30`, {
				headers: {
					Authorization: `bearer ${token}`,
				},
			}).then((response) => {
				if (response.status === 401) {
					setBestPosts('');
					throw new Error(response.status);
				}
				response.json().then(({ data }) => {
					setBestPosts(data.children);
					// console.log(data.children);
				});
			});
		} catch (err) {
			console.error(err);
			setBestPosts('');
		}
	}, [token, bestPosts]);

	return [...bestPosts];
};
