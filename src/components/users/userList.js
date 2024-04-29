import React from 'react';

const UsersList = (props) => {
	const {users, selectedUserId, onUserSelected} = props;

	const handleUserChange = (event) => {
		onUserSelected(Number(event.target.value));
	};

	return (
		<div className="">
			<div className="user__list">User:
				<select onChange={handleUserChange} value={selectedUserId}>
					{users.map(user => (
						<option value={user.id} key={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
export default UsersList;