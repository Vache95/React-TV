import React from 'react';

import { type ITextInputProps } from './types';

const TextInput: React.FC<ITextInputProps> = ({ label, onChange = () => null, ...rest }) => (
	<label>
		<input onChange={onChange} {...rest} />
		{!!label && <span>{label}</span>}
	</label>
);

export default TextInput;
