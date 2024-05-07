import './activityList.scss';
import {useEffect, useState} from 'react';

const ActivityList = (props) => {

	const {users, selectedUserId, onRowClick, selectedActivity, setSelectedActivity} = props;
	const [endDate, setEndDate] = useState(selectedActivity ? selectedActivity.endDate : '');

	const handleRowClick = (activity) => {
		onRowClick(activity);
	};

	useEffect(() => {
		if (selectedActivity) {
			// setEndDate(prevState => ({
			// 	...prevState,
			// 	[selectedActivity.id]: selectedActivity.endDate
			// }));
			setSelectedActivity(selectedActivity);
		}
	}, [selectedActivity]);

	return (<div className="activity">
		<h2>Activity:</h2>
		<table className="activity__table">
			<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Start Date</th>
				<th>End Date</th>
			</tr>
			</thead>
			<tbody>
			{users.filter(user => user.id === selectedUserId).flatMap(user => user.activities.map((activity, index) => (
				<tr className={
					activity.endDate != null ? "disabled" : "active"}
					key={index}
					onClick={() => handleRowClick(activity)}>
					<td>{activity.title}</td>
					<td>{activity.description}</td>
					<td>{activity.startDate}</td>
					<td>{endDate[index] || activity.endDate}</td>
				</tr>)))}
			</tbody>
		</table>
	</div>);
};

export default ActivityList;