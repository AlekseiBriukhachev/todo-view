import React from 'react';
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

const Sidebar = (props) => {

	const {users, selectedUserId, onUserSelected} = props;
	const [modalShow, setModalShow] = React.useState(false);

	const handleUserChange = (event) => {
		onUserSelected(Number(event.target.value));
	};

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
						<button
							className="sidebar__button"
							onClick={() => setModalShow(true)}>
							<CDBSidebarMenuItem icon="plus">Add new task</CDBSidebarMenuItem>
						</button>
						<AddNewActivityModal
							show={modalShow}
							onHide={() => setModalShow(false)}
							selectedUserId={selectedUserId}
						/>
						{/*<NavLink exact to="/" activeClassName="activeClicked">*/}
						<CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
						{/*</NavLink>*/}
						{/*<NavLink exact to="/tables" activeClassName="activeClicked">*/}
						<CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
						{/*</NavLink>*/}
						{/*<NavLink exact to="/profile" activeClassName="activeClicked">*/}
						<CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
						{/*</NavLink>*/}
						{/*<NavLink exact to="/analytics" activeClassName="activeClicked">*/}
						<CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
						{/*</NavLink>*/}
						{/*<NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">*/}
						<CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
						{/*</NavLink>*/}
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