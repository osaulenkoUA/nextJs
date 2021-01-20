import { createAction } from '@reduxjs/toolkit';

// --------------------------------------------------------------------------------------

const getArticlesRequest = createAction('articles/getArticlesRequest');
const getArticlesSuccess = createAction('articles/getArticlesSuccess');
const getArticlesError = createAction('articles/getArticlesError');

const increment = createAction('article/increment');
const decrement = createAction('article/decrement');

export default {
	increment,
	decrement,
	getArticlesRequest,
	getArticlesSuccess,
	getArticlesError,
};
