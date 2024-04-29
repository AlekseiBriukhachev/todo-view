import {useHttp} from './http.hooks';

const useTodoServices = () => {
	const {loading, request, error, clearError, process, setProcess} = useHttp();
	const getUsers = async () => {
		const response = await request('http://localhost:8080/api/users');
		return response.map(_transformUsers);
	};


	const _transformUsers = (users) => {

		return {
			id: users.id,
			name: users.name,
			email: users.email,
			activities: users.activities.map(activity => ({
				title: activity.title,
				description: activity.description,
				startDate: activity.startDate,
				endDate: activity.endDate,
			})),
		};
	};

	return {
		loading,
		error,
		clearError,
		process,
		setProcess,
		getUsers
	};
};

export default useTodoServices;