// import App from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<Component {...pageProps} />;
			</Provider>
		</>
	);
}

export default MyApp;
