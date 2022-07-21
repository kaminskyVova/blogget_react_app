import { useEffect, useState, useContext } from 'react';
import { URL_API } from './../api/const';
import { tokenContext } from './../context/tokenContext';
import { useBestPosts } from './useBestPosts';

export const useAuth = () => {
	const { token, delToken } = useContext(tokenContext);
	const [auth, setAuth] = useState({});

	useEffect(() => {
		if (!token) return;

		try {
			fetch(`${URL_API}/api/v1/me`, {
				headers: {
					Authorization: `bearer ${token}`,
				},
			}).then((response) => {
				if (response.status === 401) {
					setAuth({});
					throw new Error(response.status);
				}
				response.json().then(({ name, icon_img: iconImg }) => {
					if (name) {
						const img = iconImg.replace(/\?.*$/, '');
						setAuth({ name, img });
					}
				});
			});
		} catch (err) {
			console.error(err);
			delToken();
			setAuth({});
		}
	}, [token]);

	const clearAuth = () => setAuth({});

	return [auth, clearAuth];
};
