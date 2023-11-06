import { Outlet } from 'react-router-dom';
import './people.scss';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/useDispatch';
import { selectPeople } from 'store/selector';
import { useAppSelector } from 'hooks/useSelector';
import { peopleThunk } from 'store/slices/peopleSlice/thunk';

const PeoplePage = () => {
	const { peopleData } = useAppSelector(selectPeople);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(peopleThunk());
	}, []);

	return (
		<div className='people'>
			<div className='people__container'>
				<h1>People</h1>
				<div className='people-list'>
					{peopleData?.map(({ id, image }) => (
						<div key={id} className='people-list__item'>
							<div className='people-list__img'>
								<img src={image?.medium} alt='show' />
							</div>
							<div className='people-list__info'></div>
						</div>
					))}
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default PeoplePage;
