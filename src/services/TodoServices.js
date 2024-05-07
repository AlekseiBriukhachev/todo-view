import {useHttp} from './http.hooks';

const useTodoServices = () => {
	const {loading, request, error, clearError, process, setProcess} = useHttp();
	const getUsers = async () => {
		const response = await request('http://localhost:8080/api/users');
		return response.map(_transformUsers);
	};

	const updateActivity = async (activity) => {
		const response = await request(
			`http://localhost:8080/api/activity/${activity.id}/update`,
			'POST',
			JSON.stringify(activity));
		return _transformActivity(response);
	};

	const completeActivity = async (activityId) => {
		const response = await request(
			`http://localhost:8080/api/activity/${activityId}/complete`,
			'POST');
		return _transformActivity(response);
	};


	const _transformUsers = (users) => {

		return {
			id: users.id,
			name: users.name,
			email: users.email,
			activities: users.activities.map(activity => ({
				id: activity.id,
				title: activity.title,
				description: activity.description,
				startDate: activity.startDate,
				endDate: activity.endDate,
			})),
		};
	};

	const _transformActivity = (activity) => {
		return {
			id: activity.id,
			title: activity.title,
			description: activity.description,
			startDate: activity.startDate,
			endDate: activity.endDate,
		};
	};

	return {
		loading,
		error,
		clearError,
		process,
		setProcess,
		getUsers,
		updateActivity,
		completeActivity
	};
};

export default useTodoServices;