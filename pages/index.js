import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '../components/Layout.js';
import { useSelector, useDispatch } from 'react-redux';
import articlesActions from '../redux/actions/articlesActions.js';

export default function Index() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	function inc() {
		dispatch(articlesActions.increment(1));
	}
	function dec() {
		dispatch(articlesActions.decrement(1));
	}

	return (
		<Layout>
			<button onClick={inc}>Increment</button>
			<button onClick={dec}>decrement</button>
			<p>{counter.counter}</p>
		</Layout>
	);
}
