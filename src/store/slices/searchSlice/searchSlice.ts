import { createSlice } from '@reduxjs/toolkit';
import { searchThunk } from './thunk';
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
		builder.addCase(searchThunk.pending, state => {
			state.loading = true;
			// state.items = [];
		});
		builder.addCase(searchThunk.fulfilled, (state, action) => {
			// state.items = action.payload;
			state.searchData = action.payload;
			state.loading = false;
		});
		builder.addCase(searchThunk.rejected, state => {
			state.loading = false;
			// state.items = [];
		});
	},
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;
