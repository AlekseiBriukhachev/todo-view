import React from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ActivityList from '../activityList/ActivityList';


const MainPage = (props) => {
	const { users, selectedUserId, onRowClick, selectedActivity, setSelectedActivity } = props;


	return (
		<>
			<ErrorBoundary>
				<ActivityList
					users={users}
					selectedUserId={selectedUserId}
					onRowClick={onRowClick}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}/>
			</ErrorBoundary>
		</>
	);
};

export default MainPage;