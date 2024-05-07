import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AppHeader from '../appHeader/AppHeader';
import {useEffect, useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import useTodoServices from '../../services/TodoServices';
import ActivitySidebar from '../activitySidebar/ActivitySidebar';


function App() {
	const [users, setUsers] = useState([]);
	const [selectedUserId, setSelectedUserId] = useState(100009);
	const [selectedActivity, setSelectedActivity] = useState(null);
	const {getUsers} = useTodoServices();
	useEffect(() => {
		getUsers()
			.then(data => {
				setUsers(data);
				setSelectedUserId(data[0]?.id);
			});
	}, []);

	const handleUserSelected = (userId) => {
		setSelectedUserId(userId);
	};

	const handleRowClick = (activity) => {
		setSelectedActivity(activity);
	};

	return (
		<Router>
			<div className="app">
				<Sidebar
					users={users}
					selectedUserId={selectedUserId}
					onUserSelected={handleUserSelected}/>
				<main className="main-content">
					<AppHeader/>
					<div className="content">
						<MainPage
							users={users}
							selectedUserId={selectedUserId}
							onRowClick={handleRowClick}
							selectedActivity={selectedActivity}
							setSelectedActivity={setSelectedActivity}/>
					</div>
				</main>
				<ActivitySidebar
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}/>
			</div>
		</Router>
	);
}

export default App;
