import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Layout } from '../components/Layout.js';
import articlesActions from '../redux/actions/articlesActions.js';

export default function Posts({ data }) {
	const dispatch = useDispatch();
	const [posts, setPosts] = useState(data);
	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:3005/articles/get');
			const dataPosts = await response.json();
			setPosts(dataPosts);
			dispatch(articlesActions.getArticlesSuccess(dataPosts));
		}

		if (!data) load();
	}, []);

	if (!posts) {
		return (
			<Layout>
				<h1>Loading.....</h1>
			</Layout>
		);
	}

	return (
		<Layout title={'Posts Page'}>
			{posts.map((post) => {
				return (
					<div key={post._id}>
						<Link href={`/posts/${post._id}`}>
							<a>{post._id}</a>
						</Link>
					</div>
				);
			})}
		</Layout>
	);
}
Posts.getInitialProps = async (ctx) => {
	if (!ctx.req) {
		return { data: null };
	}
	const response = await fetch('http://localhost:3005/articles/get');
	const data = await response.json();
	return { data };
};
{
	/* <Link as={`posts/${post._id}`} href={`/posts/[id]`}></Link> old syntacsys */
}
