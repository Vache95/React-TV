interface initialStatType {
	showDetailsData: {
		image: any;
	};
	showAllData: any[];
	loading: boolean;
	error: string;
}

export const initialState: initialStatType = {
	showDetailsData: { image: '' },
	showAllData: [],
	loading: false,
	error: '',
};
