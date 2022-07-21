import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';

function App() {
	return (
		<TokenContextProvider value={{}}>
			<AuthContextProvider value={{}}>
				<Header />
				<Main />
			</AuthContextProvider>
		</TokenContextProvider>
	);
}

export default App;
