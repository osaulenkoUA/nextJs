import Router from 'next/router';
import { Layout } from '../../components/Layout.js';
import { useSelector } from 'react-redux';

export default function About() {
	const onHandleClick = () => {
		Router.push('/');
	};
	const counter = useSelector((state) => state.counter);

	return (
		<Layout title={'About Page'}>
			<h1>About</h1>
			<p>{counter.counter}</p>
			<button onClick={onHandleClick}>Go back</button>
		</Layout>
	);
}
