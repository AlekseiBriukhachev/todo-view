import React, {useEffect, useState} from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import UsersList from '../users/userList';
import ActivityList from '../activityList/ActivityList';
import useTodoServices from '../../services/TodoServices';


const MainPage = () => {

	const [users, setUsers] = useState([]);
	const [selectedUserId, setSelectedUserId] = useState(100009);
	const {getUsers} = useTodoServices();
	useEffect(() => {
		getUsers()
			.then(data => {
				setUsers(data);
				setSelectedUserId(data[0]?.id);
			});
	}, []);

	const handleUserSelected = (userId) => {
		setSelectedUserId(userId);
	};

	return (
		<>
			<ErrorBoundary>
				<UsersList
					users={users}
					selectedUserId={selectedUserId}
					onUserSelected={handleUserSelected}/>
			</ErrorBoundary>
			<ErrorBoundary>
				<ActivityList
					users={users}
					selectedUserId={selectedUserId}/>
			</ErrorBoundary>
		</>
	);
};

export default MainPage;