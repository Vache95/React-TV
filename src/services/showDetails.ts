import AxiosInstance from 'lib/api';

export const showDetails = (id: string) => AxiosInstance.get(`/shows/${id}`);
export const getShows = () => AxiosInstance.get('/shows');
