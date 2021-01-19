import { useState, useEffect } from 'react';
import Router from 'next/router';

import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout.js';

export default function Post({ currentPost: serverPost }) {
	const router = useRouter();
	const [post, setPost] = useState(serverPost);
	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:3005/articles/get');
			const data = await response.json();
			const currentPost = data.find((post) => post._id === router.query.id);
			setPost(currentPost);
		}
		if (!serverPost) load();
	}, []);

	if (!post) {
		return (
			<Layout>
				<h1>Loading....</h1>
			</Layout>
		);
	}

	return (
		<Layout title={'Some Post'}>
			<h1>{post.title}</h1>
			<hr />
			<p>{post.article.slice(0, 600)}</p>
			<button onClick={() => Router.push('/posts')}>Go Back</button>
		</Layout>
	);
}

// робота як і на сервері так і на фронті
Post.getInitialProps = async (ctx) => {
	console.log(ctx.req);
	if (!ctx.req) {
		return { currentPost: null };
	}
	const response = await fetch('http://localhost:3005/articles/get');
	const data = await response.json();
	const currentPost = data.find((post) => post._id === ctx.query.id);
	return { currentPost };
};
// робота з базою даних, запрос на прямую.
// export async function getServerSideProps({ query, req }) {
// 	if (!req) {
// 		return { currentPost: null };
// 	}
// 	const response = await fetch('http://localhost:3005/articles/get');
// 	const data = await response.json();
// 	const currentPost = data.find((post) => post._id === query.id);
// 	return { props: { currentPost } };
// }
