export const debounceRaf = (fh) => {
	let raf = 0;

	return (...args) => {
		if (raf) return;
		raf = requestAnimationFrame(() => {
			fh(...args);
			raf = 0;
		});
	};
};
