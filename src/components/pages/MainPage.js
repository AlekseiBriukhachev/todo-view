import {Link} from 'react-router-dom';
import Users from '../users/users';


const MainPage = () => {
	return (
		<div>
			<h1>Main Page</h1>
			<ul>
				<li><Link to="/users">Users</Link></li>
			</ul>
		</div>
	);
}

export default MainPage;