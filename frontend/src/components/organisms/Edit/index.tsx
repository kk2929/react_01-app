import React, { FC, useState, useEffect } from 'react';
import Drawer from "../../atoms/Drawer/index";
import Input from "../../atoms/Input/index";

type User = {
	id: number;
	name: string;
}

export type EditProps = {
	triggerName: string
	userId?: number
} & React.ComponentProps<typeof Drawer>

export const Edit: FC<EditProps> = ({
	triggerName,
	userId,
	isOpen,
	toggleOpen,
	...props
}) => {
	const [user, setUser] = useState<User>();
	const [isLoading, setIsLoading] = useState(true);

	const getUser = async (userId?: number) => {
		console.log(userId);
		setIsLoading(true);
		// await new Promise(resolve => setTimeout(resolve, 2000))
		const res = await (await fetch("http://localhost:8080/dev/getUserByID", {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: userId })
		})).json()

		setUser(res.rows[0]);
		setIsLoading(false);
	};

	useEffect(() => {
		(async () => {
			await getUser(userId);

		})();
	}, [userId])

	return (
		<Drawer
			// trigger={triggerName}
			isOpen={isOpen}
			toggleOpen={toggleOpen}
		>
			<p>{userId}</p>
			<p>{user?.id}</p>
			<p>{user?.name}</p>
		</Drawer>
	);
}

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