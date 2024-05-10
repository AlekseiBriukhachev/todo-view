import React from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ActivityList from '../activityList/ActivityList';


const MainPage = (props) => {
	const { selectedUserId, onUserSelected } = props;


	const handleRowClick = (activity) => {
		onUserSelected(activity);
	};

	return (
		<>
			<ErrorBoundary>
				<ActivityList
					userId={selectedUserId}
					onRowClick={handleRowClick}
					onUserSelected={onUserSelected}/>
			</ErrorBoundary>
		</>
	);
};

export default MainPage;