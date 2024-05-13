import './activityList.scss';
import React, {useEffect, useState} from 'react';
import TodoServices from '../../services/TodoServices';

const ActivityList = ({userId, onRowClick, setSelectedActivity, onHoursCalc}) => {
	const [user, setUser] = useState();
	const [activities, onUserSelected] = useState(user?.activities);
	const {completeActivity, getUserById} = TodoServices();

	useEffect(() => {
		getUserById(userId)
			.then(data => {
				setUser(data);
				onUserSelected(data?.activities);
				onHoursCalc(calculateHours(data?.activities));
			})
			.catch(error => console.error('[Main page] There was an error!', error));
	}, [userId]);

	const onCompleteActivity = (activityId) => {
		completeActivity(activityId)
			.then(updatedActivity => {
				setSelectedActivity(updatedActivity);
				onUserSelected(activities.map(activity => activity.id === updatedActivity.id ? updatedActivity : activity));
			})
			.catch(error => console.error('[ActivityList] There was an error!', error));
	};

	const calculateHours = (activities) => {
		console.log('start calculateHours', activities)
		return activities.reduce((acc, activity) => {
			if (activity.isCompleted) {
				const startDate = new Date(activity.startDate).getTime();
				console.log('startDate', startDate);
				const endDate = new Date(activity.endDate).getTime();
				console.log('endDate', endDate);
				const hours = Math.abs(endDate - startDate) / 36e5;
				console.log('hours', hours);
				return acc + hours;
			}
			console.log('acc', acc);
			return acc;
		}, 0);

	}

	const renderItem = (activity) => {
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
				{activity.map(item => (
					<tr className={item.isCompleted ? 'disabled' : 'active'}
						key={item.id}
						onClick={() => onRowClick(item)}>
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
				))}
				</tbody>
			</table>
		);
	};

	return (
		<div className="activity">
			<h2>Activity:</h2>
			<div>
				{activities && renderItem(activities)}
			</div>
		</div>
	);
};

export default ActivityList;