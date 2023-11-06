import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useDispatch';
import { selectPeople } from 'store/selector';
import { useAppSelector } from 'hooks/useSelector';
import { peopleThunk } from 'store/slices/peopleSlice/thunk';
import Loading from 'components/Loading';
import { useWait } from 'hooks/useWait';
import './people.scss';

const PeoplePage = () => {
	const { peopleData, loading } = useAppSelector(selectPeople);
	const [loadings, setLoadings] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(peopleThunk());
	}, [dispatch]);
	useWait(() => setLoadings(loading), loading ? 0 : 1000);

	return (
		<div className='people'>
			<div className='people__container'>
				<h1>People</h1>
				<div className='people-list'>
					{!!peopleData?.length && !loadings ? (
						peopleData?.map(({ id, image, name }) => (
							<div key={id} className='people-list__item'>
								<div className='people-list__img'>
									<img src={image?.medium} alt='show' />
								</div>
								<div className='people-list__info'>
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
				<Outlet />
			</div>
		</div>
	);
};

export default PeoplePage;
