import React, { FC, ChangeEventHandler } from 'react';
import styles from './styles.module.css';
import { TextField } from '@mui/material';

export type InputProps = React.ComponentProps<typeof TextField> & {
	errorMsg?: string
	handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const Input: FC<InputProps> = ({
	errorMsg = "",
	size = "small",
	handleChange,
	...props
}) => {
	return (
		<TextField
			size={size}
			onChange={handleChange}
			{...(errorMsg && { error: true, helperText: errorMsg })}
			{...props}

			InputProps={{
				classes: {
					input: styles.input
				}
			}}
			FormHelperTextProps={{
				style: {
					margin: "1px 5px"
				}
			}}

		/>
	);
}

export default Input;
