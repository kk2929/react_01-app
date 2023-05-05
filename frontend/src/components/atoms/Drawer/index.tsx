
import React, { FC } from 'react';
import styles from './styles.module.css';
import { Drawer as MuiDrawer } from '@mui/material';

export type DrawerProps = {
	isOpen: boolean
	toggleOpen: () => void
} & React.ComponentProps<typeof MuiDrawer>

const Drawer: FC<DrawerProps> = ({
	children,
	isOpen,
	toggleOpen,
}) => {
	return (
		<MuiDrawer
			anchor='right'
			open={isOpen}
			onClose={toggleOpen}
		>
			{children}
		</MuiDrawer>
	);
}

export default Drawer;
