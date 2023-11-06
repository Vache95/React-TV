import { createSlice } from '@reduxjs/toolkit';
import { showThunk, showAllThunk } from './thunk';
import { initialState } from './initialState';

export const searchSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		// setItems: (state, action) => {
		// 	state.items = action.payload;
		// },
	},
	extraReducers: builder => {
		builder.addCase(showThunk.pending, state => {
			state.loading = true;
			// state.items = [];
		});
		builder.addCase(showThunk.fulfilled, (state, action) => {
			// state.items = action.payload;
			state.showDetailsData = action.payload;
			state.loading = false;
		});
		builder.addCase(showThunk.rejected, state => {
			state.loading = false;
			// state.items = [];
		});
		builder.addCase(showAllThunk.pending, state => {
			state.loading = true;
			// state.items = [];
		});
		builder.addCase(showAllThunk.fulfilled, (state, action) => {
			// state.items = action.payload;
			state.showAllData = action.payload;
			state.loading = false;
		});
		builder.addCase(showAllThunk.rejected, state => {
			state.loading = false;
			// state.items = [];
		});
	},
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;
