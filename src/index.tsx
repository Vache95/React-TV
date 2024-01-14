import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Routers>
				<App />
			</Routers>
		</Provider>
	</React.StrictMode>,
);
