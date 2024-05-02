import React from 'react';
import './userList.scss';

const UsersList = (props) => {
	const {users, selectedUserId, onUserSelected} = props;

	const handleUserChange = (event) => {
		onUserSelected(Number(event.target.value));
	};

	return (
		<div className="users">
			<div className="users__list">User:
				<select className="users__list-select" onChange={handleUserChange} value={selectedUserId}>
					{users.map(user => (
						<option value={user.id} key={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</div>
			<button className="users__add-activity">Add activity</button>
		</div>

	);
};
export default UsersList;