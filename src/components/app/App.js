import {Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
import UsersList from '../users/userList';
import MainPage from '../pages/MainPage';
import AppHeader from '../appHeader/AppHeader';
import {Suspense} from 'react';
import Spinner from '../spinner/Spinner';

// const routes = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <MainPage/>
// 	},
// 	{
// 		path: '/users',
// 		element: <UsersList/>
// 	}
// ]);

function App() {
	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route path="/" element={<MainPage/>}/>
							<Route path="/users" element={<UsersList/>}/>
						</Routes>
					</Suspense>
					{/*<RouterProvider router={routes}/>*/}
				</main>
			</div>
		</Router>
	);
}

export default App;
