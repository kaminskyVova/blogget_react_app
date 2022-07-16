import { useEffect} from 'react';

export const useAuth = (urlApi, setAuth, token, delToken) => {
	useEffect(() => {
		if (!token) return;

		fetch(`${urlApi}/api/v1/me`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then(({ name, icon_img: iconImg }) => {
				const img = iconImg.replace(/\?.*$/, '');
				setAuth({ name, img });
			})
			.catch((err) => {
				console.err(err);
				delToken();
				setAuth({});
			});
	}, [urlApi, setAuth, token, delToken]);
};
