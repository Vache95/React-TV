import { RootState } from 'store/store';

export const selectSearch = ({ search }: RootState) => search;
export const selectShow = ({ show }: RootState) => show;
export const selectPeople = ({ people }: RootState) => people;
