import './App.css';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import UsersList from '../users/users';
import MainPage from '../pages/MainPage';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainPage/>
	},
	{
		path: '/users',
		element: <UsersList/>
	}
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={routes}/>
		</div>
	);
}

export default App;
