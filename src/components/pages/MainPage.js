import React, {useState} from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ActivityList from '../activityList/ActivityList';
import Dashboard from '../dashboard/Dashboard';


const MainPage = (props) => {
	const { selectedUserId, onUserSelected } = props;
	const [hours, setHours] = useState(0);


	const handleRowClick = (activity) => {
		onUserSelected(activity);
	};

	return (
		<>
			<ErrorBoundary>
				<ActivityList
					userId={selectedUserId}
					onRowClick={handleRowClick}
					onUserSelected={onUserSelected}
					onHoursCalc={setHours}/>
			</ErrorBoundary>
			<Dashboard hoursUsed={hours}/>
		</>
	);
};

export default MainPage;