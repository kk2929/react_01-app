import React, { useState, useEffect } from 'react';
import './App.css';
import { Table, TableProps, Head } from "./components/organisms/Table/index";
import Input from "./components/atoms/Input/index";

function App() {
	const [val, setVal] = useState("3")
	const [errorMsg, setErrorMsg] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setVal(e.target.value)

	const isOK = (val: any, max: any, min: any) => {
		if (val === "") return true
		if (min <= val && val <= max) return true
		else return false
	}
	useEffect(() => {
		if (isOK(val, 10, 1)) setErrorMsg("")
		else setErrorMsg("範囲外です")
	}, [val])

	const createInput = () => {
		return (
			<Input
				style={{ width: 200 }}
				label="メモ"
				value={val}
				errorMsg={errorMsg}
				handleChange={handleChange}
			/>
		)
	}
	function createData(
		name: string,
		calories: number,
		fat: number,
		carbs: number,
		protein: number,
		memo?: any,
	) { return { name, calories, fat, carbs, protein, memo }; }
	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0, createInput()),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3, createInput()),
		createData('Eclair', 262, 16.0, 24, 6.0, createInput()),
		createData('Cupcake', 305, 3.7, 67, 4.3, createInput()),
		createData('Gingerbread', 356, 16.0, 49, 3.9, createInput()),
	];
	const heads: Head[] = [
		{ name: '品名', keyName: 'name', props: { align: 'left' } },
		{ name: 'カロリー[kcal]', keyName: 'calories', props: { align: 'right' } },
		{ name: '脂肪', keyName: 'fat', props: { align: 'right' } },
		{ name: '糖質', keyName: 'carbs', props: { align: 'right' } },
		{ name: 'タンパク質', keyName: 'protein', props: { align: 'right' } },
		{ name: 'メモ', keyName: 'memo', props: { align: 'right' } }
	]

	return (
		<div className="App">
			<Table
				heads={heads}
				rows={rows}
			/>
			<p>value = {val}</p>
		</div>
	);
}

export default App;
