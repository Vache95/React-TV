import { ChangeEvent, useEffect } from 'react';
import { useNavigate, createSearchParams, useLocation, useParams } from 'react-router-dom';
import { searchThunk } from 'store/slices/searchSlice/thunk';
import { useAppDispatch } from 'hooks/useDispatch';
import { TextInput } from 'components';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import TV from 'assets/images/tvm.png';
import './header.scss';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { search, pathname } = useLocation();

	const { id } = useParams();

	const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
		//@ts-ignore
		dispatch(searchThunk({ params: { q: event.target.value } }));
		navigate({
			pathname: 'search',
			search: Boolean(event.target.value) ? `${createSearchParams({ q: event.target.value })}` : '',
		});
	};

	useEffect(() => {
		if (search) {
			//@ts-ignore
			dispatch(searchThunk({ params: { q: search?.slice(3) } }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='header'>
				<div className='header__container'>
					<div className='header__logo' onClick={() => navigate('/')}>
						<img src={TV} alt='logo' />
					</div>
					<div className='header__search'>
						<TextInput label={<Search />} onChange={onSearch} placeholder='Search Shows' />
					</div>
				</div>
			</div>
			<div className='header-sub'>
				<div className='header-sub__container'>
					<ul className='header-sub__list'>
						<li className='header-sub__list-item' onClick={() => navigate('/show')}>
							Shows
						</li>
						<li className='header-sub__list-item' onClick={() => navigate('/people')}>
							Peolpe
						</li>
					</ul>
				</div>
			</div>
			{pathname !== '/' && (
				<div className='header-path'>
					<div className='header-path__container'>
						<span onClick={() => navigate('/')}>HOME</span>
						<span className='slesh'>/</span>
						<span className={pathname}>{` ${pathname
							?.slice(1)
							.toLocaleUpperCase()
							?.slice(0, id?.length)
							?.replaceAll('/', ' ')}`}</span>
						{id && <span className='slesh'>/</span>}
						{id && <span>{id}</span>}
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
