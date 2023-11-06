/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import { peopleThunk } from './thunk';
import { initialState } from './initialState';

export const peopleSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		// setItems: (state, action) => {
		// 	state.items = action.payload;
		// },
	},
	extraReducers: builder => {
		builder.addCase(peopleThunk.pending, state => {
			state.loading = true;
			// state.items = [];
		});
		builder.addCase(peopleThunk.fulfilled, (state, action) => {
			// state.items = action.payload;
			state.peopleData = action.payload;
			state.loading = false;
		});
		builder.addCase(peopleThunk.rejected, state => {
			state.loading = false;
			// state.items = [];
		});
	},
});

export const {} = peopleSlice.actions;

export default peopleSlice.reducer;
