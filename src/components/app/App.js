import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AppHeader from '../appHeader/AppHeader';
import {useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import ActivitySidebar from '../activitySidebar/ActivitySidebar';

function App() {
	// const [selectedUserId, setSelectedUserId] = useState(100009);
	const [selectedUserId, setSelectedUserId] = useState(1);
	const [selectedActivity, setSelectedActivity] = useState(null);

	return (
		<Router>
			<div className="app">
				<Sidebar
					selectedUserId={selectedUserId}
					onUserSelected={setSelectedUserId}/>
				<main className="main-content">
					<AppHeader/>
					<div className="content">
						<MainPage
							selectedUserId={selectedUserId}
							onUserSelected={setSelectedActivity}/>
					</div>
				</main>
				<ActivitySidebar
					selectedActivity={selectedActivity}
					onUserSelected={setSelectedActivity}/>
			</div>
		</Router>
	);
}

export default App;