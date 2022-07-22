import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { BestPostsContextProvider } from './context/bestPostsContext';

function App() {
	return (
		<TokenContextProvider value={{}}>
			<AuthContextProvider value={{}}>
				<BestPostsContextProvider value={{}}>
					<Header />
					<Main />
				</BestPostsContextProvider>
			</AuthContextProvider>
		</TokenContextProvider>
	);
}

export default App;
