import React, { useState, useEffect } from 'react';
import Drawer from "../atoms/Drawer/index";
import { Table, TableProps, Head } from "../organisms/Table/index";
import { Edit } from "../organisms/Edit/index";
import { Link } from "@mui/material";

type User = {
	id: number;
	name: string;
}

const App = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [editUserId, setEditUserId] = useState<number>();
	const [isLoading, setIsLoading] = useState(true);

	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen)

	const getUser = async () => {
		setIsLoading(true);
		// await new Promise(resolve => setTimeout(resolve, 2000))
		const res = await (await fetch("http://localhost:8080/dev/hello", {
			method: 'post',
			body: JSON.stringify({ name: "testName" })
		})).json()

		setUsers(res.rows);
		setIsLoading(false);
	};

	useEffect(() => {
		(async () => {
			await getUser();
		})();
	}, [])

	const heads: Head[] = [
		{ name: 'ID', keyName: 'id', props: { align: 'right' } },
		{ name: '氏名', keyName: 'name', props: { align: 'right' } },
	]

	const makeRows = (rows: any[]) => {
		return rows.map((row: any) => {
			const newRow = { ...row }
			newRow.name =
				<Link
					underline='hover'
					// className={styles.link}
					onClick={() => {
						setEditUserId(row.id)
						toggleOpen()
					}}
				>
					{row.name}
				</Link>
			return newRow
		})
	}
	const rows = makeRows(users);

	return (
		<div style={{ margin: "1rem" }}>
			<Table
				heads={heads}
				rows={rows}
			/>
			<Edit
				triggerName={"kume"}
				isOpen={isOpen}
				toggleOpen={toggleOpen}
				userId={editUserId}
			/>
		</div>
	);
}

export default App;