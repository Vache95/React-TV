import { useAppSelector } from 'hooks/useSelector';
import { selectSearch } from 'store/selector';
import './search.scss';
import Loading from 'layout/components/Loading';
import { useWait } from 'hooks/useWait';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
	const { searchData, loading } = useAppSelector(selectSearch);
	const [loadings, setLoadings] = useState<boolean>(false);
	const navigate = useNavigate();
	useWait(() => setLoadings(loading), loading ? 0 : 1000);
	const handleShow = (show: any) => {
		navigate(`/show/${show?.id}`);
	};
	return (
		<div className='search'>
			<div className='search__container'>
				<h1>Search</h1>
				<div className='search-list'>
					{!!searchData?.length && !loadings ? (
						searchData?.map(({ show }) => (
							<div className='search-list__item' key={show?.id}>
								<div className='search-list__img' onClick={() => handleShow(show)}>
									<img src={show?.image?.medium} alt='searchImg' />
								</div>
								<div className='search-list__info'>
									<h3>{show?.name}</h3>
								</div>
							</div>
						))
					) : (
						<>
							<Loading blur loading={loadings} />
						</>
					)}
					{!searchData?.length && !loadings && (
						<div className='search__info'>
							<p>Pardon us, but no shows or people matching your query were found. You can make a request to add the show you're looking for.</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
