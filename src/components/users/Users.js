import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UserList from './UserList';

function Users() {
	const [users, setUsers] = useState([]);

	async function getUsers() {
		const usersRes = await axios.get('http://localhost:5000/auth/');
		//   const usersRes = await axios.get(
		//     "Server url/auth/"
		//   );
		setUsers(usersRes.data);
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<UserList users={users} />
		</div>
	);
}

export default Users;
