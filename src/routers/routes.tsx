import AppLayout from 'layout';
import { DetailsPage, HomePage, PeopleDetailsPage, PeoplePage, SearchPage, ShowDetailsPage, ShowPage } from 'pages';
import { Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='show' element={<ShowPage />}>
					<Route path=':id' element={<ShowDetailsPage />} />
				</Route>
				<Route path='details' element={<DetailsPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='people' element={<PeoplePage />}>
					<Route path=':id' element={<PeopleDetailsPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
