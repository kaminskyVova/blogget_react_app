import React from 'react';
import PropTypes from 'prop-types';
import { usePostsData } from '../hooks/usePostData';

export const postContext = React.createContext({});

export const PostContextProvider = ({ children }) => {
	const [postsData] = usePostsData();

	return (
		<postContext.Provider value={postsData}>{children}</postContext.Provider>
	);
};

PostContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
