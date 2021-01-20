import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import articlesActions from '../actions/articlesActions';

const initialState = 0;
const inc = (state, { payload }) => state + payload;
const dec = (state, { payload }) => state - payload;

const counter = createReducer(initialState, {
	[articlesActions.increment]: inc,
	[articlesActions.decrement]: dec,
});

const getArtricle = (_, { payload }) => payload;

const articles = createReducer([], {
	[articlesActions.getArticlesSuccess]: getArtricle,
});
export default combineReducers({ counter, articles });
