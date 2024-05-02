
const ActivitySidebar = (props) => {
	const { selectedActivity } = props;

	if (selectedActivity != null) {
		return (
			<div className="activity-sidebar">
				<h2>{selectedActivity.title}</h2>
				<ul>
				<li>{selectedActivity.description}</li>
				<li>{selectedActivity.startDate}</li>
				<li>{selectedActivity.endDate}</li>
				<li>Activity 4</li>
				<li>Activity 5</li>
			</ul>
			</div>
		);
	} else {
		return (
			<div className="activity-sidebar hiding">

			</div>
		);
	}
};

export default ActivitySidebar;