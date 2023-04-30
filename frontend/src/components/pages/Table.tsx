import React, { useState, useEffect } from 'react';
import Drawer from "../atoms/Drawer/index";
import Input from "../atoms/Input/index";
import { Table, TableProps, Head } from "../organisms/Table/index";

type User = {
	id: number;
	name: string;
	// name: any;
}

const App = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getUser = async () => {
		setIsLoading(true);
		// await new Promise(resolve => setTimeout(resolve, 2000))
		const res = await (await fetch("/api/get")).json()
		// const r = await (await fetch("http://localhost:8080/dev/test")).json()
		const r = await (await fetch("http://localhost:8080/dev/hello", {
			method: 'post',
			body: JSON.stringify({ name: "testName" })
		})).json()
		console.log(r);

		setUsers(res.rows);
		setIsLoading(false);
	};
	const deleteUser = async (id: number) => {
		await fetch(`/api/delete/${id}`)
		await getUser();
	}

	useEffect(() => {
		(async () => {
			await getUser();
		})();
	}, [])

	const heads: Head[] = [
		{ name: 'ID', keyName: 'id', props: { align: 'right' } },
		{ name: '氏名', keyName: 'name', props: { align: 'right' } },
	]

	// const createInput = (val: any, i: any) => {
	// 	return (
	// 		<Input
	// 			style={{ width: 200 }}
	// 			label="メモ"
	// 			value={val}
	// 			errorMsg={errorMsg}
	// 			handleChange={(e) => handleChange(e, i)}
	// 		/>
	// 	)
	// }
	const makeRows = (rows: any[]) => {
		return rows.map((row: any) => {
			const newRow = { ...row }
			newRow.name =
				<Drawer
					trigger={row.name}
				>
					<p>contents</p>
				</Drawer>
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
		</div>
	);
}

export default App;