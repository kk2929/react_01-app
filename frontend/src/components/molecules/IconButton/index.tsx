import React, { FC } from 'react';
import styles from './styles.module.css';
import { Icon } from '../../atoms/Icon/index';
import Button from '../../atoms/Button/index';

export type IconButtonProps = React.ComponentProps<typeof Button> & {
	kind: "Send" | "Delete"
}
const btnText = {
	Send: { text: "送信", type: "primary" },
	Delete: { text: "削除", type: "warning" },
}

const SendButton: FC<IconButtonProps> = ({ className, kind, color, ...props }) => (
	<Button className={[styles.root, className].join(' ')} color={btnText[kind].type as any} {...props}>
		<Icon className={styles.icon} iconName={kind} />
		{btnText[kind].text}
	</Button>
);

export default SendButton;