import React from 'react';

function UserList({ users }) {
	function renderUsers() {
		return users.map((user, i) => {
			return (
				<>
					<li key={i}>
						<p>{user.firstName}</p>
						<p>{user.lastName}</p>
						<p>{user.email}</p>
					</li>
				</>
			);
		});
	}

	return (
		<div>
			<ul>{renderUsers()}</ul>
		</div>
	);
}

export default UserList;
