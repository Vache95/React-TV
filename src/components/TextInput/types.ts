import React, { InputHTMLAttributes } from 'react';

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	label?: string | React.ReactNode;
	onChange?: (_val: React.ChangeEvent<HTMLInputElement>) => void;
}
