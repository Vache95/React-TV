import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeople } from 'services/peopleServices';

export const peopleThunk = createAsyncThunk('fetchPizzas', async () => {
	const { data } = await getPeople();
	return data;
});
