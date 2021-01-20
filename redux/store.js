import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './reducers/articlesReducer.js';

const store = configureStore({
	reducer: {
		counter: articlesReducer,
	},
});

export default store;
