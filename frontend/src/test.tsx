
import React, { useState } from 'react';
import { Drawer } from '@mui/material';

export default function TemporaryDrawer() {

	const [open, setopen] = useState(false);
	const toggleOpen = () => {
		setopen(!open);
	}
	return (
		<>
			<button onClick={toggleOpen}>hoge</button>
			<Drawer anchor='right' open={open} onClose={toggleOpen}>
				<p>hello</p>
			</Drawer>
		</>
	);
}