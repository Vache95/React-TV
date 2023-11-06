import { ChangeEvent, useEffect } from 'react';
import { TextInput } from 'components';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import TV from 'assets/images/tvm.png';
import './header.scss';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { searchThunk } from 'store/slices/searchSlice/thunk';
import { useAppDispatch } from 'hooks/useDispatch';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { search } = useLocation();

	const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
		//@ts-ignore
		dispatch(searchThunk({ params: { q: event.target.value } }));
		navigate({
			pathname: 'search',
			search: Boolean(event.target.value) ? `${createSearchParams({ q: event.target.value })}` : '',
		});
	};
	useEffect(() => {
		//@ts-ignore
		dispatch(searchThunk({ params: { q: search?.slice(3) } }));
	}, []);

	return (
		<>
			<div className='header'>
				<div className='header__container'>
					<div className='header__logo'>
						<img src={TV} alt='logo' />
					</div>
					<div className='header__search'>
						<TextInput label={<Search />} onChange={onSearch} placeholder='Search Shows' />
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
			</div>
			<div className='header-path'>
				<div className='header-path__container'></div>
			</div>
		</>
	);
};

export default Header;
