import { configureStore } from '@reduxjs/toolkit';
import search from './slices/searchSlice/searchSlice';
import show from './slices/showSlice/showSlice';
import people from './slices/peopleSlice/peopleSlice';

export const store = configureStore({
	reducer: { search, show, people },
});

export type RootState = ReturnType<typeof store.getState>;
