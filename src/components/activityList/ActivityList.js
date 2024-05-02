import './activityList.scss';
import {useState} from 'react';

const ActivityList = (props) => {

	const {users, selectedUserId, onRowClick} = props;

	const handleRowClick = (activity) => {
		onRowClick(activity);
	};

	return (<div className="activity">
		<h2>Activity:</h2>
		<table className="activity__table">
			<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Start Date</th>
				<th>End Date</th>
				{/*<th>Actions</th>*/}
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
					<td>{activity.endDate}</td>
					{/*<td className="activity__table--actions">*/}
					{/*	<button className="edit" onClick={/!*() => props.onEditActivity(activity)*!/}>Edit</button>*/}
					{/*	<button className="delete" onClick={/!*() => props.onDeleteActivity(activity)*!/}>Delete</button>*/}
					{/*</td>*/}
				</tr>)))}
			</tbody>
		</table>
	</div>);
};

export default ActivityList;