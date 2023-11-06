import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const AppLayout = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='main'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default AppLayout;
