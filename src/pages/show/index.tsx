import { Outlet, useLocation } from 'react-router-dom';
import './show.scss';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/useDispatch';
import { showAllThunk } from 'store/slices/showSlice/thunk';
import { useAppSelector } from 'hooks/useSelector';
import { selectShow } from 'store/selector';

const ShowPage = () => {
	const { showAllData } = useAppSelector(selectShow);
	const { pathname } = useLocation();

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(showAllThunk());
	}, [dispatch]);
	return (
		<div className='show'>
			<div className='show__container'>
				<h1>Shows</h1>
				{pathname === '/show' && (
					<div className='show-list'>
						{showAllData?.map(({ id, image }) => (
							<div key={id} className='show-list__item'>
								<div className='show-list__img'>
									<img src={image?.medium} alt='show' />
								</div>
								<div className='show-list__info'></div>
							</div>
						))}
					</div>
				)}
				<Outlet />
			</div>
		</div>
	);
};

export default ShowPage;
