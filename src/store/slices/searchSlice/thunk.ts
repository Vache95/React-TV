import { createAsyncThunk } from '@reduxjs/toolkit';
import { search } from 'services/searchServices';

export const searchThunk = createAsyncThunk('fetchPizzas', async params => {
	const { data } = await search(params);
	return data;
});
