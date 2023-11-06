import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShows, showDetails } from 'services/showDetails';

export const showThunk = createAsyncThunk('fetchPizzas', async (id: string) => {
	const { data } = await showDetails(id);
	return data;
});

export const showAllThunk = createAsyncThunk('shwoAll', async () => {
	const { data } = await getShows();
	return data;
});
