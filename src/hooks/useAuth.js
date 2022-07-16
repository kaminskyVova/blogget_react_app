import { useEffect } from 'react';

export const useAuth = (urlApi, setAuth, token, delToken) => {
	useEffect(() => {
		if (!token) return;

		try {
			fetch(`${urlApi}/api/v1/me`, {
				headers: {
					Authorization: `bearer ${token}`,
				},
			}).then((response) => {
				if (response.status === 401) {
					console.log('Ошибка статус 401');
					delToken();
					setAuth({});
				} else if (response.status === 200) {
					response.json().then(({ name, icon_img: iconImg }) => {
						if (name) {
							const img = iconImg.replace(/\?.*$/, '');
							setAuth({ name, img });
						}
					});
				}
			});
		} catch (err) {
			console.err(err);
			delToken();
			setAuth({});
		}
	}, [urlApi, setAuth, token, delToken]);
};
