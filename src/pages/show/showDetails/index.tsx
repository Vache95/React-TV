import { useAppSelector } from 'hooks/useSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectShow } from 'store/selector';
import { showThunk } from 'store/slices/showSlice/thunk';
import './showdetails.scss';

const ShowDetailsPage = () => {
	const { showDetailsData } = useAppSelector(selectShow);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		//@ts-ignore
		dispatch(showThunk(id));
	}, [dispatch, id]);

	return (
		<div className='showdetails'>
			<div className='showdetails__img'>
				<img src={showDetailsData?.image?.medium} alt='show' />
			</div>
		</div>
	);
};

export default ShowDetailsPage;
