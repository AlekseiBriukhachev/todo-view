import React, {useEffect, useState} from 'react';
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from 'cdbreact';
import './sidebar.scss';
import AddNewActivityModal from '../../modals/AddNewActivityModal';
import useTodoServices from '../../services/TodoServices';

const Sidebar = (props) => {
	const {selectedUserId, onUserSelected} = props;
	const [users, setUsers] = useState([]);
	const [modalShow, setModalShow] = React.useState(false);

	const {getUsers} = useTodoServices();

	const handleUserChange = (event) => {
		onUserSelected(Number(event.target.value));
	};

	useEffect(() => {
		getUsers().then(setUsers);
	}, []);

	return (
		<div className="sidebar">
			<CDBSidebar className="sidebar__wrapper">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<div className="fa fa-user">
						<select className="sidebar__user" onChange={handleUserChange} value={selectedUserId}>
							{users.map(user => (
								<option value={user.id} key={user.id}>
									{user.name}
								</option>
							))}
						</select>
					</div>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
						<CDBSidebarMenuItem
							icon="plus"
							className="sidebar__button"
							onClick={() => setModalShow(true)}>
							Add new task
						</CDBSidebarMenuItem>
						<AddNewActivityModal
							show={modalShow}
							onHide={() => setModalShow(false)}
							selectedUserId={selectedUserId}
						/>
						<CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
						<CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
						<CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
						<CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{textAlign: 'center'}}>
					<div className="sidebar-btn-wrapper sidebar__footer">
						Sidebar Footer
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
};


export default Sidebar;