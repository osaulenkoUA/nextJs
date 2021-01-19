import Router from 'next/router';
import { Layout } from '../../components/Layout.js';

export default function About() {
	const onHandleClick = () => {
		Router.push('/');
	};
	return (
		<Layout title={'About Page'}>
			<h1>About</h1>
			<p>Lorem ipsum</p>
			<button onClick={onHandleClick}>Go back</button>
		</Layout>
	);
}
