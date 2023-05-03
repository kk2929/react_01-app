
import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { Drawer as MuiDrawer } from '@mui/material';
import { Link } from "@mui/material";

export type DrawerProps = any

const Drawer: FC<DrawerProps> = ({
	children,
	trigger,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen)

	// const _trigger = React.cloneElement(trigger, {
	// 	onClick: toggleOpen
	// });
	return (
		<>
			<Link
				underline='hover'
				className={styles.link}
				onClick={toggleOpen}
			>
				{trigger}
			</Link>
			<MuiDrawer
				anchor='right'
				open={isOpen}
				onClose={toggleOpen}
			>
				{children}
			</MuiDrawer>
		</>
	);
}

export default Drawer;
