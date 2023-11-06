import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useDispatch';
import { showAllThunk } from 'store/slices/showSlice/thunk';
import { useAppSelector } from 'hooks/useSelector';
import { selectShow } from 'store/selector';
import Loading from 'components/Loading';
import { useWait } from 'hooks/useWait';
import './show.scss';

const ShowPage = () => {
	const { showAllData, loading } = useAppSelector(selectShow);
	const [loadings, setLoadings] = useState<boolean>(false);
	const { pathname } = useLocation();

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(showAllThunk());
	}, [dispatch]);

	useWait(() => setLoadings(loading), loading ? 0 : 1000);

	return (
		<div className='show'>
			<div className='show__container'>
				<h1>Shows</h1>
				{pathname === '/show' && (
					<div className='show-list'>
						{!!showAllData?.length && !loadings ? (
							showAllData?.map(({ id, image, name }) => (
								<div key={id} className='show-list__item'>
									<div className='show-list__img'>
										<img src={image?.medium} alt='show' />
									</div>
									<div className='show-list__info'>
										<h3>{name}</h3>
									</div>
								</div>
							))
						) : (
							<>
								<Loading blur loading={loadings} />
							</>
						)}
					</div>
				)}
				<Outlet />
			</div>
		</div>
	);
};

export default ShowPage;
