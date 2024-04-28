import React, {useEffect, useState} from 'react';

function UsersList() {

	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/api/users')
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(error => console.error('Error fetching users:', error));
	}, []);
	return (
		<div>
			<h1>Users</h1>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Activity</th>
						<th>Start</th>
						<th>End</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.surname}</td>
							<td>{user.email}</td>
							<td>{user.activity}</td>
							{/*<td>{user.activity.startDate}</td>*/}
							{/*<td>{user.activity.endDate}</td>*/}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default UsersList;