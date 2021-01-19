import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '../components/Layout.js';

export default function Index() {
	return (
		<Layout title={'Home Page'}>
			<h1>Hello word!!!</h1>
			<Link href="/about">
				<a>about</a>
			</Link>
			<br />
			<Link href="/posts">
				<a>posts</a>
			</Link>
		</Layout>
	);
}
