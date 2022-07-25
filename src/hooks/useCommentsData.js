import { useContext, useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const useCommentsData = (id) => {
	const [[post, comments], setCommentsData] = useState([]);
	const { token } = useContext(tokenContext);

	useEffect(() => {
		if (!token || !id) return;

		try {
			fetch(`${URL_API}/comments/${id}`, {
				headers: {
					Authorization: `bearer ${token}`,
				},
			})
				.then((response) => {
					if (response.status === 401) {
						throw new Error(response.status);
					}
					return response.json();
				})
				.then(
					([
						{
							data: {
								children: [{ data: post }],
							},
						},
						{
							data: { children },
						},
					]) => {
						const comments = children.map((item) => item.data);

						setCommentsData([post, comments]);
					}
				);
		} catch (error) {
			console.error(error);
		}
	}, [token, id]);

	return [post, comments];
};
