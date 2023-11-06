import React, { useState } from 'react';
import { useWait } from 'hooks/useWait';

import { type ILoadingProps } from './types';
import './loading.scss';
import { ReactComponent as SpinnerIcon } from 'assets/icons/spiner.svg';

export const Loading: React.FC<ILoadingProps> = ({ blur = false, loading }) => {
	const [isLoading, setIsLoading] = useState<boolean>(loading);
	useWait(() => setIsLoading(!!loading), loading ? 0 : 1000);
	if (!isLoading) return null;

	return (
		<div className={`loading ${blur && 'blur'} ${loading && 'active'}`}>
			<span className='spinner'>
				<SpinnerIcon />
			</span>
		</div>
	);
};

export default Loading;
