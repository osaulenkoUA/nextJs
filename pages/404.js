import Router from 'next/router';
import { Layout } from '../components/Layout.js';
import s from '../styles/error.module.scss';

export default function ErrorPage() {
	const onHandleClick = () => {
		Router.push('/');
	};
	return (
		<Layout title={'404'}>
			<h1 className={s.title}> Error 404</h1>
			<p>Page not found</p>
			<button onClick={onHandleClick}>Go back</button>
		</Layout>
	);
}
