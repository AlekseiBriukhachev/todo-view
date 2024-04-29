
const ActivityList = (props) => {

	const {users, selectedUserId} = props;

	return (
		<div>
			<h2>Activity:</h2>
			<table>
				<thead>
				<tr>
					<th>Title</th>
					<th>Description</th>
					<th>Start Date</th>
					<th>End Date</th>
				</tr>
				</thead>
				<tbody>
				{users.filter(user => user.id === selectedUserId).flatMap(user =>
					user.activities.map((activity, index) => (
						<tr key={index}>
							<td>{activity.title}</td>
							<td>{activity.description}</td>
							<td>{activity.startDate}</td>
							<td>{activity.endDate}</td>
						</tr>
					))
				)}
				</tbody>
			</table>
		</div>
	);
};

export default ActivityList;