import React, {useEffect, useState} from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ActivityList from '../activityList/ActivityList';
import TodoServices from '../../services/TodoServices';


const MainPage = (props) => {
	const { selectedUserId, onRowClick, selectedActivity, setSelectedActivity } = props;
	const [user, setUser] = useState();

	const {getUserById} = TodoServices();

	useEffect(() => {
		getUserById(selectedUserId)
			.then(data => setUser(data))
			.then(setSelectedActivity(null))
			.catch(error => console.error('There was an error!', error));
		console.log('user', selectedUserId, user);
	}, [selectedUserId, onRowClick]);


	return (
		<>
			<ErrorBoundary>
				<ActivityList
					activities={user !=null ? user.activities: []}
					onRowClick={onRowClick}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}/>
			</ErrorBoundary>
		</>
	);
};

export default MainPage;