import AxiosInstance from 'lib/api';

export const search = (params: any) => AxiosInstance.get('/search/shows', params);
