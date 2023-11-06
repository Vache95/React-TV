interface initialStatType {
	searchData: any[];
	loading: boolean;
	error: string;
}

export const initialState: initialStatType = {
	searchData: [],
	loading: false,
	error: '',
};
