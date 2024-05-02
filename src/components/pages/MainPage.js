import React from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ActivityList from '../activityList/ActivityList';


const MainPage = (props) => {


	return (
		<>
			<ErrorBoundary>
				<ActivityList
					users={props.users}
					selectedUserId={props.selectedUserId}
					onRowClick={props.onRowClick}/>
			</ErrorBoundary>
		</>
	);
};

export default MainPage;