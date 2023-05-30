// @ts-nocheck

import { Header, Main } from './components';

import useTheme from './hooks/useTheme';

function App() {

	useTheme();

	return (
		<>
			<Header />
			<Main />
			{/* <Footer /> */}
		</>
	);

}

export default App;
