import React, { FC } from 'react';
import styles from './styles.module.css';
import { Icon } from '../../atoms/Icon/index';
import Button from '../../atoms/Button/index';

export type SendButtonProps = React.ComponentProps<typeof Button>

const SendButton: FC<SendButtonProps> = ({ className, ...props }) => (
	<Button className={[styles.root, className].join(' ')} {...props}>
		<Icon className={styles.icon} iconName='Send' />
		送信
	</Button>
);

export default SendButton;