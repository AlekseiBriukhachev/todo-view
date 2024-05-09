import './activityList.scss';
import React, {useEffect, useState} from 'react';
import TodoServices from '../../services/TodoServices';

const ActivityList = (props) => {

	const {activities, onRowClick, selectedActivity, setSelectedActivity} = props;
	const [endDate, setEndDate] = useState(selectedActivity ? selectedActivity.endDate : '');
	const [checked, setChecked] = useState(false);

	const {completeActivity} = TodoServices();

	const handleRowClick = (activity) => {
		onRowClick(activity);
	};

	const onCompleteActivity = (activityId) => {
		completeActivity(activityId)
			.then(updatedActivity => {
				setSelectedActivity(updatedActivity);
				setEndDate(updatedActivity.endDate);
				setChecked(updatedActivity.isCompleted);
			})
			.catch(error => console.error('There was an error!', error));
	};


	useEffect(() => {
		if (selectedActivity) {
			setSelectedActivity(selectedActivity);
			setEndDate(selectedActivity.endDate);
			setChecked(selectedActivity.isCompleted);
		}
	}, [selectedActivity]);

	useEffect(() => {
		renderItem(activities);
	}, [activities]);

	const renderItem = (activity) => {
		const items = activity.map(item => {
			return (
				<tr className={
					item.isCompleted ? 'disabled' : 'active'}
					key={item.id}
					onClick={() => handleRowClick(item)}>
					<td>
						<input
							type="checkbox"
							checked={item.isCompleted}
							onChange={() => onCompleteActivity(item.id)}/>
					</td>
					<td>{item.title}</td>
					<td>{item.description}</td>
					<td>{item.startDate}</td>
					<td>{item.endDate}</td>
				</tr>
			);
		});
		return (
			<table className="activity__table">
				<thead>
				<tr>
					<th>Done</th>
					<th>Title</th>
					<th>Description</th>
					<th>Start Date</th>
					<th>End Date</th>
				</tr>
				</thead>
				<tbody>
				{items}
				</tbody>
			</table>
		);
	};

	return (
		<div className="activity">
			<h2>Activity:</h2>
			<div>
				{renderItem(activities)}
			</div>

		</div>
	);
};

export default ActivityList;