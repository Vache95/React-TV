interface initialStatType {
	peopleData: any[];
	loading: boolean;
	error: string;
}

export const initialState: initialStatType = {
	peopleData: [],
	loading: false,
	error: '',
};
