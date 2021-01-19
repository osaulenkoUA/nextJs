import Link from 'next/link';
import Head from 'next/head';

export function Layout({ children, title = 'Next APP' }) {
	return (
		<>
			<Head>
				<title>{title} </title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charset="UTF-8" />
				<meta name="keywords" content="HTML, CSS, JavaScript" />
			</Head>
			<nav>
				<Link href={'/'}>
					<a>Home</a>
				</Link>
				<Link href={'/about'}>
					<a>About</a>
				</Link>
				<Link href={'/posts'}>
					<a>Post</a>
				</Link>
			</nav>
			<main>{children}</main>
			<style jsx>
				{`
					nav {
						position: fixed;
						height: 60px;
						left: 0;
						top: 0;
						right: 0;
						background: grey;
						display: grid;
						grid-template-columns: 1fr 1fr 1fr;
					}
					nav a {
						color: #fff;
						text-align: center;
						align-self: center;
						text-decoration: none;
					}
					main {
						margin-top: 60px;
					}
				`}
			</style>
		</>
	);
}
