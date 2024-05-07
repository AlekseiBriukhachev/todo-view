import './activitySidebar.scss';
import React, {useCallback, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem
} from 'cdbreact';
import TodoServices from '../../services/TodoServices';

const ActivitySidebar = (props) => {
	const { selectedActivity, setSelectedActivity } = props;
	const {updateActivity, completeActivity} = TodoServices();
	const [description, setDescription] = useState(selectedActivity ? selectedActivity.description : '');
	const [endDate, setEndDate] = useState(selectedActivity ? selectedActivity.endDate : '');

	const onEditActivity = (activity) => {
		updateActivity(activity)
			.then(updatedActivity => {
				setSelectedActivity(updatedActivity);
				setDescription(updatedActivity.description);
			})
			.catch(error => console.error('There was an error!', error));
	};

	const onCompleteActivity = (activityId) => {
		completeActivity(activityId)
			.then(updatedActivity => {
				setSelectedActivity(updatedActivity);
				setEndDate(updatedActivity.endDate);
			})
			.catch(error => console.error('There was an error!', error));
	}

	const onDescriptionChange = (value) => {
		setDescription(value);
		if (selectedActivity) {
			selectedActivity.description = value;
		}
	};

	useEffect(() => {
		if (selectedActivity) {
			setDescription(selectedActivity.description);
			setEndDate(selectedActivity.endDate);
		}
	}, [selectedActivity]);

	return selectedActivity ? (
		<CDBSidebar>
			<CDBSidebarHeader prefix={selectedActivity.title}/>
			<CDBSidebarContent>
				<CDBSidebarMenu>
					<CDBSidebarMenuItem icon="plus">
						<input
							style={{background: 'rgb(17, 24, 39)', border: 'none', color: 'white'}}
							type="text"
							value={description}
							onChange={(e) => onDescriptionChange(e.target.value)}/>
					</CDBSidebarMenuItem>
					<CDBSidebarMenuItem icon="columns">{selectedActivity.startDate}</CDBSidebarMenuItem>
					<CDBSidebarMenuItem icon="table">{endDate}</CDBSidebarMenuItem>
				</CDBSidebarMenu>
			</CDBSidebarContent>
			<CDBSidebarFooter style={{textAlign: 'center'}}>
				<div className="sidebar-btn-wrapper sidebar__footer activity__sidebar-actions">
					<button className="edit" onClick={() => onEditActivity(selectedActivity)}>Edit</button>
					<button className="complete" onClick={() => onCompleteActivity(selectedActivity.id)}>Complete</button>
				</div>
			</CDBSidebarFooter>
		</CDBSidebar>
	) : null;
};

export default ActivitySidebar;